<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class TariffsRankCs extends Model
{
    const DEFAULT_TTL = 86400;

    public $timestamps = false;

    protected $fillable = [
        'rank_from',
        'rank_to',
        'price',
    ];

    /**
     * @return TariffsRankCs|mixed
     */
    public static function getAllPrice()
    {
        return Cache::remember('tariffs_ranks_cs_all', self::DEFAULT_TTL, function () {
            return TariffsRankCs::all();
        });
    }
}
