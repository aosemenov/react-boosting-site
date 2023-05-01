<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model {

    protected $attributes = [
        'external_id' => "",
        'paid' => false,
        'status' => "Не оплачен",
        'amount' => 0,
        'currency' => "",
    ];

    public $fillable = [
        'paid',
        'status',
        'amount',
        'currency',
    ];

}
