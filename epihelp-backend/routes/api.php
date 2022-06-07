<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserController;
use App\Models\Post;
use App\Http\Resources\PostSummary;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('categories', CategoryController::class);
Route::apiResource('posts', PostController::class);
Route::apiResource('comments', CommentController::class);
Route::apiResource('users', UserController::class);
Route::get('search/{category}/{query}', function ($category, $query) {
    if ($category == 'all') {
        $response = Post::where('title', 'regexp', "/.*$query/i")
            ->get();
    } else {
        $response = Post::where('category_id', $category)
            ->where('title', 'regexp', "/.*$query/i")
            ->get();
    }
    return PostSummary::collection($response);
});
/* Route::get('search/{query}', function($query) {
    $response = Article::whereRaw(array('$text'=>array('$search'=> $query)))->get();
    return $response;
}); */
