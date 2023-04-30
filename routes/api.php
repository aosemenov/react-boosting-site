<?php

use App\Http\Controllers\BoostCSController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::middleware('json.response')->group(function() {

    Route::post('/get-user/{id}', [UserController::class, 'getUser']);

    Route::get('/boosting/calc/cs-rank', [BoostCSController::class, 'calcRank']);
    Route::get('/boosting/calc/cs-elo', [BoostCSController::class, 'calcElo']);

    Route::get('/boosting/get/cs-rank-info', [BoostCSController::class, 'getRankInfo']);
    Route::get('/boosting/get/cs-elo-info', [BoostCSController::class, 'getEloInfo']);


});





