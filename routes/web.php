<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('root');
});
Route::get('/profile', function () {
    return view('root');
});
Route::get('/client-area/auth', function () {
    return view('root');
});
Route::get('/client-area/dashboard', function () {
    return view('root');
});
Route::get('/csgo-boosting', function () {
    return view('root');
});
Route::get('/valorant-boosting', function () {
    return view('root');
});
Route::get('/accounts', function () {
    return view('root');
});
Route::get('/csgo-accounts', function () {
    return view('root');
});
Route::get('/valorant-accounts', function () {
    return view('root');
});
Route::get('/coaching', function () {
    return view('root');
});
Route::get('/tg-auth', function () {
    return view('root');
});

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
