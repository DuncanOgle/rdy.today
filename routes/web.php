<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index');
});

$app->get('/api', function () use ($app) {
    return $app->version();
});

$app->get('/api/tube/', 'TubeController@getTube');

$app->get('/api/tube/{line}', 'TubeController@getSpecificTube');

$app->get('/api/weather/', 'WeatherController@getWeather');

$app->get('/api/weather/{location}/', 'WeatherController@getGeoWeather');

$app->get('/api/weather/GB/{location}/', 'WeatherController@getCityWeather');

$app->get('/api/rail/{from}/{to}', 'RailController@getRail');

$app->get('/api/rail/{from}/{to}/{coords}', 'RailController@getNearestRail');