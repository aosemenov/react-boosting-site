<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tariffs_rank_cs', function(Blueprint $table) {
            $table->id();
            $table->integer('rank_from');
            $table->integer('rank_to');
            $table->float('price');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tariffs_rank_cs');
    }
};
