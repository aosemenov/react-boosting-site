<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('offer_types', function(Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('offer_types');
    }
};
