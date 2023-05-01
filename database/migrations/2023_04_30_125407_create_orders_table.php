<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('orders', function(Blueprint $table) {
            $table->id();
            $table->boolean('active');
            $table->integer('user_id');
            $table->integer('offer_id');
            $table->integer('offer_type');
            $table->integer('payment_id')->nullable();
            $table->integer('discount_id')->nullable();
            $table->float('total_sum');
            $table->integer('status');
            $table->integer('booster_id')->nullable();
            $table->longText('comment')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
