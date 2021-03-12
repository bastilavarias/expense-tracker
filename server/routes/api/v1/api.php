<?php

use App\Http\Controllers\api\v1\AuthenticationController;
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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix("authentication")->group(function () {
    Route::post("/register", [AuthenticationController::class, "register"]);
    Route::post("/login", [AuthenticationController::class, "login"]);
});
