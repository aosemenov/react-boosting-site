<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('payments', function(Blueprint $table) {
            $table->id();
            $table->string('external_id')->nullable();
            $table->boolean('paid');
            $table->string('status')->nullable();
            $table->float('amount')->nullable();
            $table->string('currency')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
