<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TariffsRankCs extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'rank_from',
        'rank_to',
        'price',
    ];
}
