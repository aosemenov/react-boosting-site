<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class tariffs_rankSeeder extends Seeder
{
    protected const RANKS = [
        [
            'rank_from' => 0,
            'rank_to' => 6,
            'price' => 150.0,
        ],
        [
            'rank_from' => 7,
            'rank_to' => 10,
            'price' => 250.0,
        ],
        [
            'rank_from' => 11,
            'rank_to' => 13,
            'price' => 320.0,
        ],
        [
            'rank_from' => 14,
            'rank_to' => 14,
            'price' => 400.0,
        ],
        [
            'rank_from' => 15,
            'rank_to' => 15,
            'price' => 600.0,
        ],
        [
            'rank_from' => 16,
            'rank_to' => 16,
            'price' => 750.0,
        ],
        [
            'rank_from' => 17,
            'rank_to' => 17,
            'price' => 1000.0,
        ],
        [
            'rank_from' => 18,
            'rank_to' => 18,
            'price' => 1500.0,
        ],
    ];
    public function run(): void
    {
        foreach (self::RANKS as $rank) {
            \DB::table('tariffs_rank_cs')->insert($rank);
        }
    }
}
