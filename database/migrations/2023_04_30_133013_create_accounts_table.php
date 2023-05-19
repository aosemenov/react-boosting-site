<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('accounts', function(Blueprint $table) {
            $table->id();
            $table->boolean('active');
            $table->string('name');
            $table->longText('description');
            $table->float('price');
            $table->integer('type');
            $table->text('images');
            $table->string('login');
            $table->string('password');
            $table->string('additional');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
