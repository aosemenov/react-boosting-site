<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\BoostCSController;
use App\Http\Controllers\BoostVRController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
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

    Route::get('/boosting/calc/cs-rank', [BoostCSController::class, 'calcRank']);
    Route::get('/boosting/calc/cs-elo', [BoostCSController::class, 'calcElo']);

    Route::get('/boosting/get/cs-rank-info', [BoostCSController::class, 'getRankInfo']);
    Route::get('/boosting/get/cs-elo-info', [BoostCSController::class, 'getEloInfo']);


    Route::post('/order/create', [OrderController::class, 'createOrder']);
    Route::post('/order/{id}', [OrderController::class, 'updateOrder']);
    Route::get('/order/{id}', [OrderController::class, 'getOrder']);

    Route::get('/orders/{user_id}', [OrderController::class, 'getListOrders']);

    Route::post('/payment/{order_id}', [PaymentController::class, 'payOrder']);
    Route::get('/payment/{order_id}', [PaymentController::class, 'getPayOrder']);


    Route::post('/user/create', [UserController::class, 'createUser']);
    Route::post('/user/{id}', [UserController::class, 'updateUser']);
    Route::get('/user/{id}', [UserController::class, 'getUser']);

    Route::get('/users', [UserController::class, 'getListUsers']);

    Route::get('/accounts/vr', [AccountController::class, 'getAccountsVr']);
    Route::get('/accounts/cs', [AccountController::class, 'getAccountsCs']);
    Route::get('/accounts', [AccountController::class, 'getListAccounts']);
    Route::get('/account/{id}', [AccountController::class, 'getAccount']);

});


//Route::middleware('tg.chat')->group(function() {
//
//
//});





