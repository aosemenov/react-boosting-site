<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function(Blueprint $table) {
            $table->boolean('active')->default(true);
            $table->string('nickname')->unique();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('telegram_link')->nullable();
            $table->string('telegram_id')->nullable();
            $table->string('vk_link')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('users', function(Blueprint $table) {
            $table->dropColumn('active');
            $table->dropColumn('nickname');
            $table->dropColumn('first_name');
            $table->dropColumn('last_name');
            $table->dropColumn('telegram_link');
            $table->dropColumn('telegram_id');
            $table->dropColumn('vk_link');
        });
    }
};
