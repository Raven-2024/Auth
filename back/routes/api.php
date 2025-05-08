<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/fetch-contact', [ContactController::class, 'showContact']);   


Route::post('/register-user', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'show']);
    Route::post('/logout', [UserController::class, 'logout']);
});