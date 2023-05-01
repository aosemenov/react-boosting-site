<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('boost_cs', function(Blueprint $table) {
            $table->id();
            $table->integer('from_elo')->nullable();
            $table->integer('to_elo')->nullable();
            $table->integer('from_rank')->nullable();
            $table->integer('to_rank')->nullable();
            $table->float('sum');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('boost_cs');
    }
};
