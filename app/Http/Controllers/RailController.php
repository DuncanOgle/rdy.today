<?php

namespace App\Http\Controllers;

use App\Acme\RailData;
use App\Acme\XML2Array;

class RailController extends Controller
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

    public function getRail($from, $to)
    {
        if (preg_match('/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/', $from)) {
            // Convert to text
            $from = $this->findClosestRailStation($from);
        }

        if (preg_match('/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/', $to)) {
            // Convert to text
            $to = $this->findClosestRailStation($to);
        }

        return $this->successResponse($this->getRailData($from, $to));
    }

    public function getNearestRail($from, $to, $coords)
    {
        if (preg_match('/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/', $from)) {
            // Convert to text
            $from = $this->findClosestRailStation($from);
        }

        if (preg_match('/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/', $to)) {
            // Convert to text
            $to = $this->findClosestRailStation($to);
        }

        $data = $this->determineOrderFromCoords($from, $to, $coords);

        return $this->successResponse($this->getRailData($data[0], $data[1]));
    }

    private function determineOrderFromCoords($from, $to, $coords)
    {
        $split = explode(',', $coords);
        $distances = [];

        foreach (RailData::$lines as $line) {
            if (mb_strtolower($line['key']) == mb_strtolower($from) || mb_strtolower($line['key']) == mb_strtolower($to)) {
                $distances[$line['key']] = $this->haversine($split[0], $split[1], $line['latitude'], $line['longitude']);
            }
        }

        // Sort
        asort($distances);

        return array_keys($distances);
    }

    function findClosestRailStation($coords)
    {
        $split = explode(',', $coords);
        $distances = [];

        foreach (RailData::$lines as $line) {
            $distances[$line['key']] = $this->haversine($split[0], $split[1], $line['latitude'], $line['longitude']);
        }

        // Sort
        asort($distances);

        return array_keys($distances)[0];
    }

    /**
     * Calculates the great-circle distance between two points, with
     * the Haversine formula.
     * @param float $latitudeFrom Latitude of start point in [deg decimal]
     * @param float $longitudeFrom Longitude of start point in [deg decimal]
     * @param float $latitudeTo Latitude of target point in [deg decimal]
     * @param float $longitudeTo Longitude of target point in [deg decimal]
     * @param float $earthRadius Mean earth radius in [m]
     * @return float Distance between points in [m] (same as earthRadius)
     */
    private function haversine(
        $latitudeFrom, $longitudeFrom, $latitudeTo, $longitudeTo,
        $earthRadius = 6371000.0
    ) {
        // convert from degrees to radians
        $latFrom = deg2rad($latitudeFrom);
        $lonFrom = deg2rad($longitudeFrom);
        $latTo = deg2rad($latitudeTo);
        $lonTo = deg2rad($longitudeTo);

        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;

        $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) +
                cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));
        return $angle * $earthRadius;
    }

    private function getRailData($from, $to)
    {
        $data = json_decode($this->makeRequest($from, $to));
        $toReturn = [
            'messages' => []
        ];

        if (isset($data->nrccMessages)) {
            $toReturn['messages'] = is_array($data->nrccMessages->message) ? $data->nrccMessages->message : [$data->nrccMessages->message];
        }

        if (!empty($data->trainServices)) {
            foreach ($data->trainServices->service as $object) {
                $toReturn['times'][] = [
                    'from'         => $object->origin->location->locationName,
                    'to'           => $object->destination->location->locationName,
                    'std'          => $object->std,
                    'etd'          => $object->etd,
                    'platform'     => @$object->platform ?: '',
                    'cancelReason' => @$object->cancelReason ?: '',
                    'delayReason'  => @$object->delayReason ?: ''
                ];
            };
        }

        return $toReturn;
    }

    private function makeRequest($from = "LEW", $to = "LBG")
    {
        $requestXML = '
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:typ="http://thalesgroup.com/RTTI/2013-11-28/Token/types" xmlns:ldb="http://thalesgroup.com/RTTI/2016-02-16/ldb/">
<soapenv:Header>
  <typ:AccessToken>
     <typ:TokenValue>fc769847-9533-4832-b89c-9751ef2ffd53</typ:TokenValue>
  </typ:AccessToken>
</soapenv:Header>
<soapenv:Body>
  <ldb:GetDepartureBoardRequest>
     <ldb:numRows>15</ldb:numRows>
     <ldb:crs>' . mb_strtoupper($from) . '</ldb:crs>
     <!--Optional:-->
     <ldb:filterCrs>' . mb_strtoupper($to) . '</ldb:filterCrs>
     <!--Optional:-->
     <ldb:filterType>to</ldb:filterType>
  </ldb:GetDepartureBoardRequest>
</soapenv:Body>
</soapenv:Envelope>
    ';

        $headers = [
            "Content-type: text/xml;charset=\"utf-8\"",
            "Accept: text/xml",
            "Content-length: " . strlen($requestXML),
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_URL, "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb9.asmx");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 120);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $requestXML);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        if (($response = curl_exec($ch)) === false) {
            return $this->failingResponse("Could not load data");
        }

        return $this->xmlToJson($response);
    }

    private function xmlToJson($string)
    {
//    $string = str_ireplace("lt4:", "", $string);
//    $string = str_ireplace("lt5:", "", $string);
//    $string = str_ireplace("lt:", "", $string);
        $string = preg_replace("/lt[0-9]*?:/i", "", $string);
        $data = XML2Array::createArray($string);

        try {
            $json = json_encode($data['soap:Envelope']['soap:Body']['GetDepartureBoardResponse']['GetStationBoardResult']);
        } catch (\Exception $e) {
            return $this->failingResponse("Could not load data, maybe your station codes are incorrect");
        }

        return $json;
    }
}
