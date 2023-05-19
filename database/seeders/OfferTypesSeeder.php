<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class OfferTypesSeeder extends Seeder
{
    private const OFFER_TYPES = [
        [
            'code' => 'account',
            'name' => 'Аккаунт',
        ],
        [
            'code' => 'boost_cs',
            'name' => 'Буст CS',
        ],
        [
            'code' => 'boost_vr',
            'name' => 'Буст VR',
        ],
    ];
    public function run(): void
    {
        foreach (self::OFFER_TYPES as $OFFER_TYPE) {
            \DB::table('offer_types')->insert($OFFER_TYPE);
        }
    }
}
