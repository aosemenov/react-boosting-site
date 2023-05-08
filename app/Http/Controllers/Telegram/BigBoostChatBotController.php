<?php

namespace App\Http\Controllers\Telegram;

use Telegram\Bot\Laravel\Facades\Telegram;

class BigBoostChatBotController extends BotController
{
    public function index()
    {
        $response = Telegram::bot('bigboost_chatbot')->getMe();
    }
}
