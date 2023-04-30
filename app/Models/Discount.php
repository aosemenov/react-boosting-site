<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model {

    protected $attributes = [
        'active' => true,
        'percent' => 10,
    ];

    public $fillable = [
        'active',
        'percent',
    ];
}
