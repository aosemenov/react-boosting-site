<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Foundation\Http\FormRequest;

class OrderController extends Controller
{
    public function createOrder(FormRequest $request)
    {



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
}
