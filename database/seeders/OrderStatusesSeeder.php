<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class OrderStatusesSeeder extends Seeder
{
    private const ORDER_STATUSES = [
        [
            'code' => 'wait-pay',
            'name' => 'Ожидание оплаты',
        ],
        [
            'code' => 'search-boost',
            'name' => 'Поиск бустера',
        ],
        [
            'code' => 'in-progress',
            'name' => 'В процессе',
        ],
        [
            'code' => 'success',
            'name' => 'Выполнен',
        ],
        [
            'code' => 'cancel',
            'name' => 'Отменён',
        ],
    ];
    public function run(): void
    {
        foreach (self::ORDER_STATUSES as $ORDER_STATUS) {
            \DB::table('order_statuses')->insert($ORDER_STATUS);
        }
    }
}
