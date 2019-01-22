<?php

namespace App\Http\Controllers;

use App\Acme\RailData;
use App\Acme\TargettedRailData;
use App\Acme\XML2Array;
use Illuminate\Support\Facades\Cache;

class AllController extends Controller {
    private $railController;
    private $tubeController;
    private $weatherController;

    public function __construct() {
        $this->railController = new RailController();
        $this->tubeController = new TubeController();
        $this->weatherController = new WeatherController();
    }

    public function index() {

        $railFrom = @$_REQUEST['stationFrom'] ?: null;
        $railTo = @$_REQUEST['stationTo'] ?: null;
        $coords = @$_REQUEST['coords'] ?: null;

        if (isset($railFrom) && isset($railTo) && isset($coords)) {
            $rail = $this->railController->getNearestRail($railFrom, $railTo, $coords);
            $tube = $this->tubeController->getTube();
            $weather = $this->weatherController->getGeoWeather($coords);

            return $this->successResponse([
                "rail" => $rail,
                "tube" => $tube,
                "weather" => $weather
            ]);
        }

        if (isset($railFrom) && isset($railTo)) {
            $rail = $this->railController->getRail($railFrom, $railTo);
            $tube = $this->tubeController->getTube();
            $weather = $this->weatherController->getWeather();

            return $this->successResponse([
                "rail" => $rail,
                "tube" => $tube,
                "weather" => $weather
            ]);
        }

        return $this->failingResponse('Something went wrong');
    }
}
