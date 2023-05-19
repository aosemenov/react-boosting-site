<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('yookassa', function(Blueprint $table) {
            $table->float('profit')->nullable();
            $table->float('refunded')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('yookassa', function(Blueprint $table) {
            $table->removeColumn('profit');
            $table->removeColumn('refunded');
        });
    }
};
