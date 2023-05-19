<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\CreatePaymentRequest;
use App\Http\Requests\Order\PayOrderRequest;
use App\Models\OfferType;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Payment;
use App\Models\Yookassa;
use Auth;
use Exception;
use Fiks\YooKassa\YooKassaApi;
use Illuminate\Foundation\Http\FormRequest;
use Log;

class PaymentController extends Controller
{

    private const DEFAULT_CURRENCY = "RUB";

    public function payOrder(PayOrderRequest $request, int $order_id)
    {
        $request->validated();
        $user = Auth::user();

        $order = Order::select(['payment_id', 'user_id', 'total_sum'])
            ->where('id', $order_id)
            ->where('active', true)
            ->where('user_id', $user->id)
            ->first();

        if (isset($order)) {
            $payment = Yookassa::select(['paid', 'payment_link'])
                ->where('id', $order->payment_id)
                ->first();
            if (isset($payment->paid) && $payment->paid) {
                return $this->success(['message' => "Заказ уже оплачен!"]);
            } elseif (isset($payment->payment_link)) {
                return $this->success([
                    'message' => "Заказ ожидает оплаты",
                    'link' => $payment->payment_link,
                ]);
            } else {
                try {
                    $kassa = new YooKassaApi();

                    $payment = $kassa->createPayment($order->total_sum, self::DEFAULT_CURRENCY, '', $order->user_id);
                    $payData = $payment->response();

                    $pay = Yookassa::where('payment_id', $payData->getId())->first();
                    $order->payment_id = $pay->id;
                    $order->save();

                    return $this->success([
                        'message' => "Заказ ожидает оплаты",
                        'link' => $payData->getConfirmation()->getConfirmationUrl(),
                    ]);
                } catch (Exception $e) {
                    Log::error($e->getMessage());
                    return $this->error(400, 'Заказ не найден');
                }

            }
        } else {
            return $this->error(400, 'Заказ не найден');
        }
    }

    public function getPayOrder(PayOrderRequest $request, int $order_id)
    {
        $order = Order::select(['id', 'payment_id', 'active'])
            ->where('id', $order_id)
            ->where('active', true)
            ->first();

        if (empty($order)) {
            return $this->error(404, "Заказ не найден");
        }

        if (empty($order->payment_id)) {
            return $this->error(404, "Оплата не найдена");
        }

        $payment = Yookassa::select(['id', 'paid'])
            ->where('id', $order->payment_id)
            ->first();
        if (isset($payment->paid) && $payment->paid) {
            return $this->success(['message' => "Заказ оплачен"]);
        } else {
            return $this->success(['message' => "Заказ не оплачен"]);
        }
    }

    public function getYooKassa(CreatePaymentRequest $request)
    {
        $data = $request->validated();
        $event = $data['event'];
        $data = $data['object'];
        $yookassaPay = Yookassa::where('payment_id', $data['id'])->first();
        $order = Order::where('payment_id', $yookassaPay['id'])->first();

        $yookassaPay->status = $data['status'];
        $yookassaPay->paid = $data['paid'];
        $yookassaPay->paid_at = $data['captured_at'];
        $yookassaPay->description = $data['description'];
        $yookassaPay->profit = $data['income_amount']['value'];
        $yookassaPay->refunded = $data['refunded_amount']['value'];

        $yookassaPay->save();


        if ($order->offer_type == OfferType::getBoostCsType()->getId()
            || $order->offer_type == OfferType::getBoostVrType()->getId()) {
            if ($event == 'payment.succeeded' && $data['status'] == 'succeeded' && $data['paid']) {
                $order->status = OrderStatus::getSearchBoostStatus()->getId();
            } elseif ($event == 'payment.canceled' || $data['status'] == 'canceled') {
                $order->status = OrderStatus::getCancelStatus()->getId();
            } elseif ($event == 'refund.succeeded') {
                $order->status = OrderStatus::getCancelStatus()->getId();
            }
        } elseif ($order->offer_type == OfferType::getAccountType()->getId()) {
            //TODO: Тут добавить отправку аккаунта пользователю
            $order->status = OrderStatus::getSuccessStatus()->getId();
        }

        $order->save();

        return $this->success(['message' => "OK"]);
    }
}
