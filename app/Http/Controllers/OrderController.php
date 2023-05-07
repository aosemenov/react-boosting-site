<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\CreateOrderRequest;
use App\Models\Account;
use App\Models\BoostCs;
use App\Models\BoostVr;
use App\Models\OfferType;
use App\Models\Order;
use App\Models\OrderStatus;
use Fiks\YooKassa\YooKassaApi;
use Illuminate\Foundation\Http\FormRequest;

class OrderController extends Controller
{
    public function createOrder(CreateOrderRequest $request)
    {
        //TODO: Проверка на авторизацию

        $data = $request->toArray();

        $order = new Order();

        $offer = $this->createOffer($data);
        if ($offer) {
            $order->user_id = 1;
            $order->offer_id = $offer['id'];
            $order->offer_type = OfferType::getTypes($data['offer_type'])->getId();
            $order->total_sum = 100.0;
            $order->status = OrderStatus::getWaitStatus()->getId();
            $order->comment = $data['comment'];

            $order->save();
        }


//        $kassa = new YooKassaApi();

//        $payment = $kassa->createPayment(1.0, 'RUB', 'dddd', 1);

//        $payment->response()->toArray();
        return $this->success(['Заказ успешно создан']);

    }

    public function updateOrder(FormRequest $request, int $id)
    {

    }

    public function getOrder(int $id)
    {
        $order = Order::select(['id', 'user_id', 'offer_id', 'offer_type', 'total_sum', 'status', 'comment'])
                    ->where('id', $id)
                    ->where('active', true)
                    ->limit(1)
                    ->first();

        if ($order) {
            return $this->success($order->toArray());
        } else {
            return $this->error(404, 'Заказ не найден');
        }
    }

    public function getListOrders(int $user_id)
    {
        $orders = Order::select(['id', 'user_id', 'offer_id', 'offer_type', 'total_sum', 'status', 'comment'])
            ->where('user_id', $user_id)
            ->where('active', true)
            ->limit(1)
            ->get();

        if ($orders) {
            return $this->success($orders->toArray());
        } else {
            return $this->error(404, 'Заказов не найдено');
        }
    }

    private function createOffer(array $data)
    {
        //TODO: проверка на все поля для создания оффера

        if (!in_array($data['offer_type'], OfferType::getAllTypesCode())) {
            return false;
        }
        $offer = false;

        if ($data['offer_type'] == OfferType::getBoostCsType()->getCode()) {
            $offer = new BoostCs();

            $offer->from_elo = $data['from_elo'];
            $offer->to_elo = $data['to_elo'];
            $offer->from_rank = $data['from_rank'];
            $offer->to_rank = $data['to_rank'];
            $offer->sum = 100.0;

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
            $offer = Account::where('id', $data['offer'])
                ->where('active', true)
                ->first();

            if ($offer) {
                $offer->active = false;
                $offer->save();
            }
        }

        return $offer;

    }
}
