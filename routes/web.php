<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\VehicleController;
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
Route::get('/add-vehicle', function () {return view('admin');});


Route::prefix('auth')->group(function() {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/status', [AuthController::class, 'status']);
    Route::get('/details', [AuthController::class, 'details']);
});

Route::prefix('admin')->group(function() {
    Route::post('/profile', [AccountController::class, 'profile']);
    Route::post('/password', [AccountController::class, 'password']);
    Route::post('/avatar', [AccountController::class, 'avatar']);
    Route::post('/vehicle', [VehicleController::class, 'store']);
    Route::get('/vehicle', [VehicleController::class, 'list']);
});
