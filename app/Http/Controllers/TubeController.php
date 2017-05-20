<?php

namespace App\Http\Controllers;

class TubeController extends Controller
{
    var $allowedTubeLines = [
        "bakerloo",
        "central",
        "circle",
        "district",
        "hammersmith-city",
        "jubilee",
        "metropolitan",
        "northern",
        "piccadilly",
        "victoria",
        "waterloo-city",
        "london-overground",
        "dlr"
    ];

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getTube()
    {
        return $this->successResponse($this->getTubeData());
    }

    public function getSpecificTube($line)
    {
        if (!in_array($line, $this->allowedTubeLines)) {
            return $this->failingResponse("Unknown tube line");
        }

        return $this->successResponse($this->getTubeData($line));
    }

    function getTubeData($line = null)
    {
        $data = json_decode(file_get_contents('https://api.tfl.gov.uk/line/mode/tube,dlr,overground/status'));

        $toReturn = [];

        foreach ($data as $object) {
            if (is_null($line)) {
                $toReturn[] = [
                    'line'       => $object->id,
                    'status'     => $object->lineStatuses[0]->statusSeverity,
                    'statusText' => $object->lineStatuses[0]->statusSeverityDescription,
                    'disruption' => isset($object->lineStatuses[0]->disruption) ? $object->lineStatuses[0]->disruption->description : null
                ];
                continue;
            }

            if ($object->id == $line) {
                $toReturn[] = [
                    'line'       => $object->id,
                    'status'     => $object->lineStatuses[0]->statusSeverity,
                    'statusText' => $object->lineStatuses[0]->statusSeverityDescription,
                    'disruption' => isset($object->lineStatuses[0]->disruption) ? $object->lineStatuses[0]->disruption->description : null
                ];
                break;
            }
        };

        return $toReturn;
    }
}
