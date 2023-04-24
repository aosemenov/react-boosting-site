<?php

namespace App\Http\Controllers;

class BoostCSController extends Controller
{

    protected const MIN_ELO = 25;
    protected const MAX_ELO = 4500;

    protected const RANKS_PRICE = [
        0 => 150.0,
        1 => 150.0,
        2 => 150.0,
        3 => 150.0,
        4 => 150.0,
        5 => 150.0,
        6 => 150.0,
        7 => 250.0,
        8 => 250.0,
        9 => 250.0,
        10 => 250.0,
        11 => 320.0,
        12 => 320.0,
        13 => 320.0,
        14 => 400.0,
        15 => 600.0,
        16 => 750.0,
        17 => 1000.0,
        18 => 1500.0,
    ];

    protected const ELOS = [
        [
            'from' => 0,
            'to' => 950,
            'price' => 67.8,
        ],
        [
            'from' => 951,
            'to' => 1400,
            'price' => 96.0,
        ],
        [
            'from' => 1401,
            'to' => 1825,
            'price' => 136.8,
        ],
        [
            'from' => 1826,
            'to' => 1850,
            'price' => 144.0,
        ],
        [
            'from' => 1851,
            'to' => 2000,
            'price' => 187.2,
        ],
        [
            'from' => 2001,
            'to' => 2150,
            'price' => 276.8,
        ],
        [
            'from' => 2151,
            'to' => 2300,
            'price' => 345.6,
        ],
        [
            'from' => 2301,
            'to' => 2450,
            'price' => 416.0,
        ],
        [
            'from' => 2451,
            'to' => 2600,
            'price' => 484,
        ],
        [
            'from' => 2601,
            'to' => 2750,
            'price' => 553.0,
        ],
        [
            'from' => 2751,
            'to' => 2900,
            'price' => 624.0,
        ],
        [
            'from' => 2901,
            'to' => 3050,
            'price' => 692.0,
        ],
        [
            'from' => 3051,
            'to' => 3200,
            'price' => 761.6,
        ],
        [
            'from' => 3201,
            'to' => 3350,
            'price' => 832.0,
        ],
        [
            'from' => 3351,
            'to' => 3500,
            'price' => 900.0,
        ],
        [
            'from' => 3501,
            'to' => 3650,
            'price' => 969.6,
        ],
        [
            'from' => 3651,
            'to' => 3800,
            'price' => 1040.0,
        ],
        [
            'from' => 3801,
            'to' => 3950,
            'price' => 1110.8,
        ],
        [
            'from' => 3951,
            'to' => 4100,
            'price' => 1200.6,
        ],
        [
            'from' => 4101,
            'to' => 4250,
            'price' => 1310.4,
        ],
        [
            'from' => 4251,
            'to' => 4400,
            'price' => 1430.2,
        ],
        [
            'from' => 4401,
            'to' => 4500,
            'price' => 1560.8,
        ],
    ];

    public function index()
    {

    }

    public function calcRank(int $from, int $to)
    {
//        $this->validate();
        $sum = 0.0;

        for ($i = $from; $i <= $to; $i++) {
            $sum += self::RANKS_PRICE[$i];
        }


        return $sum;

    }

    public function calcElo(int $from, int $to)
    {
        $sum = 0.0;
        $i = $from;
        foreach (self::ELOS as $elo) {
            while ($i <= $elo['to'] && $i >= $elo['from'] && $i < $to) {
                $sum += round($elo['price'] / self::MIN_ELO, 1);
                $i++;
            }
        }

        return $sum;
    }

}
