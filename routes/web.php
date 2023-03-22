<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
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

Route::get('/', function () {return view('admin');});
Route::get('/register', function () {return view('admin');});
Route::get('/overview', function () {return view('admin');});
Route::get('/vehicles', function () {return view('admin');});
Route::get('/drivers', function () {return view('admin');});
Route::get('/account', function () {return view('admin');});
Route::get('/settings', function () {return view('admin');});


Route::prefix('auth')->group(function() {
    Route::post('/register', [AccountController::class, 'register']);
    Route::post('/login', [AccountController::class, 'login']);
    Route::get('/status', [AccountController::class, 'status']);
});

Route::prefix('admin')->group(function() {
    Route::get('/details', [AccountController::class, 'details']);
    Route::post('/profile', [AccountController::class, 'profile']);
    Route::post('/password', [AccountController::class, 'password']);
    Route::post('/avatar', [AccountController::class, 'avatar']);
});
