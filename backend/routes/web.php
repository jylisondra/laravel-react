<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    Log::error('Test log entry');
    return view('welcome');
});
