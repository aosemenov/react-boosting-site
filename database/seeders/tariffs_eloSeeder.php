<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class tariffs_eloSeeder extends Seeder
{

    protected const ELOS = [
        [
            'elo_from' => 0,
            'elo_to' => 950,
            'price' => 67.8,
        ],
        [
            'elo_from' => 951,
            'elo_to' => 1400,
            'price' => 96.0,
        ],
        [
            'elo_from' => 1401,
            'elo_to' => 1825,
            'price' => 136.8,
        ],
        [
            'elo_from' => 1826,
            'elo_to' => 1850,
            'price' => 144.0,
        ],
        [
            'elo_from' => 1851,
            'elo_to' => 2000,
            'price' => 187.2,
        ],
        [
            'elo_from' => 2001,
            'elo_to' => 2150,
            'price' => 276.8,
        ],
        [
            'elo_from' => 2151,
            'elo_to' => 2300,
            'price' => 345.6,
        ],
        [
            'elo_from' => 2301,
            'elo_to' => 2450,
            'price' => 416.0,
        ],
        [
            'elo_from' => 2451,
            'elo_to' => 2600,
            'price' => 484,
        ],
        [
            'elo_from' => 2601,
            'elo_to' => 2750,
            'price' => 553.0,
        ],
        [
            'elo_from' => 2751,
            'elo_to' => 2900,
            'price' => 624.0,
        ],
        [
            'elo_from' => 2901,
            'elo_to' => 3050,
            'price' => 692.0,
        ],
        [
            'elo_from' => 3051,
            'elo_to' => 3200,
            'price' => 761.6,
        ],
        [
            'elo_from' => 3201,
            'elo_to' => 3350,
            'price' => 832.0,
        ],
        [
            'elo_from' => 3351,
            'elo_to' => 3500,
            'price' => 900.0,
        ],
        [
            'elo_from' => 3501,
            'elo_to' => 3650,
            'price' => 969.6,
        ],
        [
            'elo_from' => 3651,
            'elo_to' => 3800,
            'price' => 1040.0,
        ],
        [
            'elo_from' => 3801,
            'elo_to' => 3950,
            'price' => 1110.8,
        ],
        [
            'elo_from' => 3951,
            'elo_to' => 4100,
            'price' => 1200.6,
        ],
        [
            'elo_from' => 4101,
            'elo_to' => 4250,
            'price' => 1310.4,
        ],
        [
            'elo_from' => 4251,
            'elo_to' => 4400,
            'price' => 1430.2,
        ],
        [
            'elo_from' => 4401,
            'elo_to' => 4500,
            'price' => 1560.8,
        ],
    ];
    public function run(): void
    {
        foreach (self::ELOS as $elo) {
            \DB::table('tariffs_elo_cs')->insert($elo);
        }
    }
}
