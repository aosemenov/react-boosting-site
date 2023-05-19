<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Yookassa extends Model
{
    /**
     * @var mixed
     */
    protected $table = 'yookassa';

    protected $attributes = [
        'user_id' => 0,
        'payment_id' => '',
        'status' => '',
        'paid' => false,
        'sum' => 0.0,
        'currency' => 'RUB',
        'payment_link' => '',
    ];

    public $fillable = [
        'user_id',
        'payment_id',
        'status',
        'paid',
        'sum',
        'currency',
        'payment_link',
        'description',
        'paid_at',
        'uniq_id',
        'profit',
        'refunded',
    ];
    protected $casts = ['paid_at' => 'datetime',];
}
