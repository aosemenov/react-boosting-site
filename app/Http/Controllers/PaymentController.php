<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\CreatePaymentRequest;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Payment;
use App\Models\Yookassa;
use Fiks\YooKassa\YooKassaApi;
use Illuminate\Foundation\Http\FormRequest;
use Log;

class PaymentController extends Controller
{
    public function payOrder(FormRequest $request)
    {
        Log::info($request);
        $this->success(['message' => "Заказ не оплачен"]);
    }

    public function getPayOrder(FormRequest $request, int $order_id)
    {
        $order = Order::select(['payment_id'])->where('id', $order_id)->where('active', true)->first();

        if (!$order->payment_id) {
            $this->success(['message' => "Оплата не найдена"]);
        }

        $payment = Payment::where('id', $order->payment_id)->first();
        if ($payment && $payment->paid) {
            $this->success(['message' => "Заказ оплачен"]);
        } else {
            $this->success(['message' => "Заказ не оплачен"]);
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

        if ($event == 'payment.succeeded' && $data['status'] == 'succeeded' && $data['paid']) {
            $order->status = OrderStatus::getSearchBoostStatus()->getId();
        } elseif ($event == 'payment.canceled' || $data['status'] == 'canceled') {
            $order->status = OrderStatus::getCancelStatus()->getId();
        } elseif ($event == 'refund.succeeded') {
            $order->status = OrderStatus::getCancelStatus()->getId();
        }

        $order->save();

        $this->success(['message' => "Оплата прошла успешно"]);
    }
}
