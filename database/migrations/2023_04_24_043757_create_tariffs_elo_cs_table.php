<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tariffs_elo_cs', function(Blueprint $table) {
            $table->id();
            $table->integer('elo_from');
            $table->integer('elo_to');
            $table->float('price');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tariffs_elo_cs');
    }
};
