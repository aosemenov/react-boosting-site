<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class BoostCs extends Model {

    protected $table = 'boost_cs';

    protected const MIN_ELO = 25;

    protected $attributes = [
        'from_elo' => 0,
        'to_elo' => 0,
        'from_rank' => 0,
        'to_rank' => 0,
        'sum' => 0,
    ];

    public $fillable = [
        'from_rank',
        'to_rank',
        'from_elo',
        'to_elo',
        'sum',
    ];

    /**
     * @param int $from
     * @param int $to
     * @return float
     */
    public static function calcSumRank(int $from, int $to): float
    {
        $sum = 0.0;

        $i = $from;

        $ranks = TariffsRankCs::getAllPrice();

        foreach ($ranks as $rank) {
            if ($i >= $to) {
                break;
            }

            while ($i >= $rank->rank_from && $i <= $rank->rank_to && $i < $to) {
                $sum += $rank->price;
                $i++;
            }
        }

        return round($sum, 1);
    }


    /**
     * @param int $from
     * @param int $to
     * @return float
     */
    public static function calcSumElo(int $from, int $to): float
    {
        $sum = 0.0;
        $i = $from;

        $elos = TariffsEloCs::getAllPrice();

        foreach ($elos as $elo) {
            while ($i <= $elo->elo_to && $i >= $elo->elo_from && $i < $to) {
                $sum += $elo->price / self::MIN_ELO;
                $i++;
            }
        }

        return round($sum, 1);
    }
}
