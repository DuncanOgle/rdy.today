<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;

class WeatherController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getWeather()
    {
        $results = Cache::remember("weather", 1, function() {
            return $this->getWeatherData();
        });
        return $this->successResponse($results);
    }

    public function getGeoWeather($location)
    {
        $results = Cache::remember("weather-$location", 1, function() use ($location) {
            return $this->getWeatherData($location);
        });
        return $this->successResponse($results);
    }

    public function getCityWeather($location)
    {
        $results = Cache::remember("weather-GB/$location", 1, function() use ($location) {
            return $this->getWeatherData($location);
        });
        return $this->successResponse($results);
    }

    private function getWeatherData($location = null)
    {
        if (is_null($location)) {
            $location = "51.4651295,-0.0121473";
        } elseif (!strpbrk($location, '0123456789')) {
            $location = "GB/" . $location;
        }

        $data = json_decode(file_get_contents("http://api.wunderground.com/api/44e5245ea7ad9ad5/hourly/q/$location.json"));

        $counter = 0;
        $toReturn = [];

        foreach (@$data->hourly_forecast as $object) {
            if ($counter >= 24) {
                break;
            }
            $toReturn[] = [
                'hour'          => intval($object->FCTTIME->hour_padded),
                'temperature'   => intval($object->temp->metric),
                'feelsLike'     => intval($object->feelslike->metric),
                'pop'           => intval($object->pop),
                'condition'     => $object->condition,
                'windSpeed'     => intval($object->wspd->english),
                'windDirection' => $object->wdir->dir,
                'humidity'      => intval($object->humidity),
            ];
            $counter++;
        };

        return $toReturn;
    }
}
