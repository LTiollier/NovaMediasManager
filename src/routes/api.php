<?php

Route::group([
    'prefix' => 'vendor/nova-medias-manager/',
    'namespace' => 'LTiollier\NovaMediasManager\App\Http\Controllers',
    'middleware' => 'api'
], function () {
    Route::get('folders/{id}', 'NovaMediasApiController@show');
    Route::delete('folders/{id}', 'NovaMediasApiController@delete');
    Route::post('folders', 'NovaMediasApiController@store');
    Route::get('root', 'NovaMediasApiController@root');
    Route::post('upload', 'NovaMediasApiController@upload');
});