<?php

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Auth::routes();

Route::get('/home', [App\Http\Controllers\ContactController::class, 'index'])->name('home');

Route::get('/categorias', [App\Http\Controllers\CategoryController::class, 'index'])->name('categorias');
Route::get('/categoria/{id}', [App\Http\Controllers\CategoryController::class, 'show'])->name('categoria/{id}');
Route::get('/contato/{id}', [App\Http\Controllers\ContactController::class, 'edit'])->name('contato/{id}');
Route::get('/endereco/{id}', [App\Http\Controllers\ContactController::class, 'showAddress'])->name('endereco/{id}');

Route::post('/nova-categoria', [App\Http\Controllers\CategoryController::class, 'store'])->name('nova-categoria');
Route::post('/novo-contato', [App\Http\Controllers\ContactController::class, 'store'])->name('novo-contato');
Route::post('/adicionar-telefone', [App\Http\Controllers\ContactController::class, 'storePhone'])->name('adicionar-telefone');
Route::post('/adicionar-endereco', [App\Http\Controllers\ContactController::class, 'storeAddress'])->name('adicionar-endereco');

Route::delete('/apagar-contato/{id}', [App\Http\Controllers\ContactController::class, 'destroy'])->name('apagar-contato');
Route::delete('/apagar-categoria/{id}', [App\Http\Controllers\CategoryController::class, 'destroy'])->name('apagar-categoria');
Route::delete('/apagar-telefone/{id}', [App\Http\Controllers\ContactController::class, 'destroyPhone'])->name('apagar-telefone');
Route::delete('/apagar-endereco/{id}', [App\Http\Controllers\ContactController::class, 'destroyAddress'])->name('apagar-endereco');

Route::put('/editar-contato/{id}', [App\Http\Controllers\ContactController::class, 'update'])->name('editar-contato');
Route::put('/editar-categoria/{id}', [App\Http\Controllers\CategoryController::class, 'update'])->name('editar-categoria/{id}');
Route::put('/editar-telefone', [App\Http\Controllers\ContactController::class, 'updatePhone'])->name('editar-telefone');
Route::put('/editar-endereco/{id}', [App\Http\Controllers\ContactController::class, 'updateAddress'])->name('editar-endereco/{id}');