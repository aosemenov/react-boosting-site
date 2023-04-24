<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TariffsEloCS extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'elo_from',
        'elo_to',
        'price',
    ];

}
