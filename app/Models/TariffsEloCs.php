<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class TariffsEloCs extends Model
{
    const DEFAULT_TTL = 86400;

    public $timestamps = false;

    protected $fillable = [
        'elo_from',
        'elo_to',
        'price',
    ];


    /**
     * @return TariffsEloCs|mixed
     */
    public static function getAllPrice()
    {
        return Cache::remember('tariffs_elo_cs_all', self::DEFAULT_TTL, function () {
            return TariffsEloCs::all();
        });
    }
}
