<?php

namespace App\Http\Controllers\Telegram;

use App\Http\Controllers\Controller;

class AuthTelegramController extends Controller
{
    public function getAuthCode()
    {
        $code = 0;

        return $this->success([
            'code' => $code,
        ]);
    }
}
