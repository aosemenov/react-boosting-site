<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;

class PaymentController extends Controller
{
    public function payOrder(int $order_id)
    {

    }

    public function getPayOrder(int $order_id)
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
}
