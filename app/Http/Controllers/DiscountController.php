<?php

namespace App\Http\Controllers;

use App\Models\Discount;

class DiscountController extends Controller
{
    private const DEFAULT_SELECT = [
        'id',
        'code',
        'percent',
        'active',
    ];

    public static function checkCode(string $code)
    {
        $code = strtolower(trim($code));
        $discount = Discount::select(self::DEFAULT_SELECT)
            ->where('code', $code)
            ->where('active', true)
            ->first();

        if (empty($discount->percent)) {
            return false;
        } else {
            return $discount;
        }
    }

    public static function calcSum(float $sum, string $code)
    {
        $discount = DiscountController::checkCode($code);
        if ($discount) {
            $sum *= (100 - $discount->percent) / 100;
        }
        return $sum;

    }
}
