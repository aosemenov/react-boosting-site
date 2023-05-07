<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AccountTypesSeeder extends Seeder
{
    private const ACCOUNT_TYPES = [
        [
            'code' => 'CS',
            'name' => 'CS:GO',
        ],
        [
            'code' => 'VR',
            'name' => 'Valorant',
        ],
    ];
    public function run(): void
    {
        foreach (self::ACCOUNT_TYPES as $ACCOUNT_TYPE) {
            \DB::table('account_types')->insert($ACCOUNT_TYPE);
        }
    }
}
