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
Route::get('/update-vehicle', function () {return view('admin');});


Route::prefix('auth')->group(function() {
    Route::get('/status', [AuthController::class, 'status']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::prefix('account')->group(function() {
    Route::post('/register', [AccountController::class, 'register']);
    Route::get('/details/{accountNo}', [AccountController::class, 'details']);
    Route::post('/profile', [AccountController::class, 'profile']);
    Route::post('/password', [AccountController::class, 'password']);
    Route::post('/avatar', [AccountController::class, 'avatar']);
});

Route::prefix('vehicle')->group(function() {
    Route::post('/', [VehicleController::class, 'store']);
    Route::get('/', [VehicleController::class, 'list']);
    Route::get('/count', [VehicleController::class, 'count']);
    Route::delete('/', [VehicleController::class, 'delete']);
    Route::put('/', [VehicleController::class, 'update']);
});
