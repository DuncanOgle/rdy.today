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
        $results = Cache::remember("weather", 20, function() {
            return $this->getWeatherData();
        });
        return $this->successResponse($results);
    }

    public function getGeoWeather($location)
    {
        $results = Cache::remember("weather-$location", 20, function() use ($location) {
            return $this->getWeatherData($location);
        });
        return $this->successResponse($results);
    }

    public function getCityWeather($location)
    {
        $results = Cache::remember("weather-GB/$location", 20, function() use ($location) {
            return $this->getWeatherData("GB/" . $location);
        });
        return $this->successResponse($results);
    }

    private function getWeatherData($location = null)
    {
        if (is_null($location)) {
            $location = "51.513788,-0.098498";
        }

        $apiKey = env('WEATHER_API_KEY');

        $data = json_decode(file_get_contents("https://api.darksky.net/forecast/$apiKey/$location?exclude=currently,minutely,daily,flags&units=uk2"));

        $counter = 0;
        $toReturn = [];

        foreach ($data->hourly->data as $object) {
            if ($counter >= 24) {
                break;
            }
            $toReturn[] = [
                'hour'          => intval(date('H', $object->time)),
                'temperature'   => intval($object->temperature),
                'feelsLike'     => intval($object->apparentTemperature),
                'pop'           => intval($object->precipProbability*100),
                'condition'     => $object->summary,
                'windSpeed'     => intval($object->windSpeed),
                'windDirection' => $object->windBearing,
                'humidity'      => intval($object->humidity),
            ];
            $counter++;
        };

        return $toReturn;
    }
}
