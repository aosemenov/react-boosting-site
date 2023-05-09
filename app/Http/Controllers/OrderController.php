<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\CreateOrderRequest;
use App\Http\Requests\Order\GetOrderListRequest;
use App\Models\Account;
use App\Models\BoostCs;
use App\Models\BoostVr;
use App\Models\OfferType;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Yookassa;
use Auth;
use Exception;
use Fiks\YooKassa\YooKassaApi;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Log;

class OrderController extends Controller
{

    //TODO: Запросить коммент для заказа бустов. Желательно универсальный для VR и CS
    private const DESCRIPTION_BOOST = "Это текст для оплаты заказов. Устанавливается из кода";
    private const DEFAULT_CURRENCY = "RUB";

    private const DEFAULT_SELECT = [
        'id',
        'user_id',
        'offer_id',
        'offer_type',
        'total_sum',
        'status',
        'comment',
    ];

    /**
     * @param CreateOrderRequest $request
     * @return Application|Response|ResponseFactory
     */
    public function createOrder(CreateOrderRequest $request)
    {
        if (!Auth::check()) {
            return $this->error(400, "Пользователь не авторизован");
        }
        $data = $request->toArray();
        $user = Auth::user();
        $order = new Order();

        $offer = $this->createOffer($data);
        if ($offer) {
            $order->user_id = $user->id;
            $order->offer_id = $offer['id'];
            $order->offer_type = OfferType::getTypes($data['offer_type'])->getId();
            //TODO: Добавить скидки

            $order->total_sum = $offer['sum'];
            $order->status = OrderStatus::getWaitStatus()->getId();
            $order->comment = $data['comment'] ?? "";

            $kassa = new YooKassaApi();

            try {

                if ($order->offer_type == OfferType::getAccountType()->getId()) {
                    $comment = $offer['description'];
                } else {
                    $comment = self::DESCRIPTION_BOOST;
                }

                $payment = $kassa->createPayment($order->total_sum, self::DEFAULT_CURRENCY, $comment, $order->user_id);
                $payData = $payment->response();

                $pay = Yookassa::where('payment_id', $payData->getId())->first();
                $order->payment_id = $pay->id;
                $order->save();

                $result = [
                    'link' => $payData->getConfirmation()->getConfirmationUrl(),
                    'price' => $payData->getAmount()->getValue(),
                    'currency' => $payData->getAmount()->getCurrency(),
                    'message' => "Заказ создан и ожидает оплаты"
                ];

                return $this->success([$result]);

            } catch (Exception $e) {
                Log::error($e->getMessage());
                return $this->error(500, "Внутренняя ошибка оплаты, попробуйте позже.");
            }

        }

        return $this->error(500, 'Ошибка создания оффера');
    }

    public function updateOrder(FormRequest $request, int $id)
    {

    }

    public function getOrder(int $id)
    {
        $order = Order::select(self::DEFAULT_SELECT)
                    ->where('id', $id)
                    ->where('active', true)
                    ->first();

        if ($order) {
            return $this->success($order->toArray());
        } else {
            return $this->error(404, 'Заказ не найден');
        }
    }

    public function getListOrders(GetOrderListRequest $request)
    {
        $user = Auth::user();
        $orders = Order::select(self::DEFAULT_SELECT)
            ->where('user_id', $user->id)
            ->where('active', true)
            ->limit(100)
            ->get();

        if ($orders) {
            return $this->success($orders->toArray());
        } else {
            return $this->error(404, 'Заказов не найдено');
        }
    }

    private function createOffer(array $data)
    {
        if (!in_array($data['offer_type'], OfferType::getAllTypesCode())) {
            return false;
        }
        $offer = false;

        if ($data['offer_type'] == OfferType::getBoostCsType()->getCode()) {
            $offer = new BoostCs();

            if (isset($data['from_rank']) && isset($data['to_rank'])) {
                $offer->from_rank = $data['from_rank'];
                $offer->to_rank = $data['to_rank'];
                $offer->sum = BoostCs::calcSumRank($data['from_rank'], $data['to_rank']);
            } elseif (isset($data['from_elo']) && isset($data['to_elo'])) {
                $offer->from_elo = $data['from_elo'];
                $offer->to_elo = $data['to_elo'];
                $offer->sum = BoostCs::calcSumElo($data['from_elo'], $data['to_elo']);
            } else {
                return false;
            }

            $offer->save();
        } elseif ($data['offer_type'] == OfferType::getBoostVrType()->getCode()) {
            $offer = new BoostVr();

            //            $offer->from_elo = $data['from_elo'];
            //            $offer->to_elo = $data['to_elo'];
            //            $offer->from_rank = $data['from_rank'];
            //            $offer->to_rank = $data['to_rank'];
            //            $offer->sum = 100.0;

            $offer->save();
        } elseif ($data['offer_type'] == OfferType::getAccountType()->getCode()) {
            $offer = Account::where('id', $data['offer_id'])
                ->where('active', true)
                ->first();

            if ($offer) {
                $offer->active = false;
                $offer->save();
                $offer->sum = $offer->price;
            } else {
                return false;
            }
        }

        return $offer;

    }
}
