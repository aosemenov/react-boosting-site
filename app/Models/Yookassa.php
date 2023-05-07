<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Yookassa extends Model
{
    protected $table = 'yookassa';
    protected $casts = ['paid_at' => 'datetime',];
}
