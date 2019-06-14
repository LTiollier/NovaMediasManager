<?php

Route::group([
    'prefix' => 'vendor/nova-medias-manager/',
    'namespace' => 'LTiollier\NovaMediasManager\App\Http\Controllers',
    'middleware' => 'api'
], function () {
    //CRUD
    Route::prefix('folders')->group(function () {
        Route::post('/', 'NovaMediasApiController@store');
        Route::get('{id}', 'NovaMediasApiController@show');
        Route::delete('{id}', 'NovaMediasApiController@delete');
    });
    Route::get('root', 'NovaMediasApiController@root');
    Route::post('upload', 'NovaMediasApiController@upload');
    Route::post('search', 'NovaMediasApiController@search');
});