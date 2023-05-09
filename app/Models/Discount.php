<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model {

    protected $attributes = [
        'active' => true,
        'percent' => 10,
        'code' => "",
    ];

    public $fillable = [
        'active',
        'percent',
        'code',
    ];
}
