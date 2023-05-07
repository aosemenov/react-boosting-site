<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('yookassa', function(Blueprint $table) {
            $table->bigInteger('order_id');
            $table->float('profit');
            $table->float('refunded');
        });
    }

    public function down(): void
    {
        Schema::table('yookassa', function(Blueprint $table) {
            $table->removeColumn('order_id');
            $table->removeColumn('profit');
            $table->removeColumn('refunded');
        });
    }
};
