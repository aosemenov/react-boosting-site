<?php

namespace App\Http\Controllers\Telegram;

use App\Http\Controllers\Controller;
use Psy\Util\Json;
use Telegram\Bot\Api;

class BotController extends Controller
{
    protected $telegram;


    public function __construct(Api $telegram)
    {
        $this->telegram = $telegram;
    }

    public function show()
    {
        $response = $this->telegram->getMe();

        \Log::info(Json::encode($response->toArray()));
        return $response;
    }
}
