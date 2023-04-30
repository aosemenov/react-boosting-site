<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {

    protected $attributes = [
        'active' => true,
        'user_id' => 0,
        'offer_id' => 0,
        'offer_type' => 0,
        'payment_id' => 0,
        'discount_id' => 0,
        'total_sum' => 0,
        'status' => 1,
        'booster_id' => 0,
        'comment' => "",
    ];

    public $fillable = [
        'active',
        'user_id',
        'offer_id',
        'offer_type',
        'payment_id',
        'discount_id',
        'total_sum',
        'status',
        'booster_id',
        'comment',
    ];

}
