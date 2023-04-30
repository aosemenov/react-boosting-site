<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BoostCs extends Model {

    protected $table = 'boost_cs';

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
}
