<?php

namespace App\Http\Controllers;

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
        return $this->successResponse($this->getWeatherData());
    }

    public function getGeoWeather($location)
    {
        return $this->successResponse($this->getWeatherData($location));
    }

    public function getCityWeather($location)
    {
        return $this->successResponse($this->getWeatherData("GB/" . $location));
    }

    private function getWeatherData($location = null)
    {
        if (is_null($location)) {
            $location = "51.4651295,-0.0121473";
        }

        $data = json_decode(file_get_contents("http://api.wunderground.com/api/44e5245ea7ad9ad5/hourly/q/$location.json"));

        $counter = 0;
        $toReturn = [];

        foreach ($data->hourly_forecast as $object) {
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
