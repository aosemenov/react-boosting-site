<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model {

    protected $attributes = [
        'active' => false,
        'type' => 1,
    ];

    public $fillable = [
        'active',
        'name',
        'description',
        'price',
        'type',
    ];

//    public function type()
//    {
//        return $this->hasOne(AccountType::class);
//    }

    public function images()
    {
        return $this->hasMany(AccountImage::class, 'account_id');
    }

}
