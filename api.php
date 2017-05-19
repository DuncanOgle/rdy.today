<?php
/**
 * Created by PhpStorm.
 * User: duncanogle
 * Date: 30/04/2017
 * Time: 10:45
 */
include('XML2Array.php');
header('Content-type: application/json');

$type = $_GET['type'];

if (!in_array($type, ['tube', 'rail', 'weather'])) {
    http_response_code(400);
    return 'unknown type';
}

if ($type == 'tube') {
    $data = json_decode(file_get_contents('https://api.tfl.gov.uk/line/mode/tube/status'));

    $toReturn = [];

    foreach ($data as $object) {
        $toReturn[] = [
            'line'       => $object->id,
            'status'     => $object->lineStatuses[0]->statusSeverity,
            'disruption' => isset($object->lineStatuses[0]->disruption) ? $object->lineStatuses[0]->disruption->description : null
        ];
    };

    die(json_encode($toReturn));
}

if ($type == 'weather') {
    $lat = @$_GET['lat'] ?: 51.4651295;
    $lon = @$_GET['lon'] ?: -0.0121473;

    $data = json_decode(file_get_contents("http://api.wunderground.com/api/44e5245ea7ad9ad5/hourly/q/$lat,$lon.json"));

    $counter = 0;
    $toReturn = [];

    foreach ($data->hourly_forecast as $object) {
        if ($counter >= 12) {
            break;
        }
        $toReturn[] = [
            'hour'        => $object->FCTTIME->hour_padded,
            'temperature' => $object->temp->metric,
            'feelsLike'   => $object->feelslike->metric,
            'pop'         => $object->pop, //round($object->pop / 10) * 10
            'condition'   => $object->condition
        ];
        $counter++;
    };

    die(json_encode($toReturn));
}

if ($type == 'rail') {
//    if (apc_exists('rail')) {
//        $cached = apc_fetch('rail');
//        // Cache for 60 seconds
//        if ($cached['time'] < time() - 60) {
//            return $cached;
//        }
//    }
//    $data = json_decode(file_get_contents('https://huxley.apphb.com/departures/lew/to/lbg/5?accessToken=fc769847-9533-4832-b89c-9751ef2ffd53'));
    $data = json_decode(makeRequest());
    $toReturn = [];

    if (isset($data->nrccMessages)) {
        $toReturn['messages'] = is_array($data->nrccMessages->message) ? $data->nrccMessages->message : [$data->nrccMessages->message];
    }
    if (!empty($data->trainServices)) {
//        die(json_encode($data));
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

//    apc_store('rail', [
//        'time' => time(),
//        'data' => $toReturn
//    ]);
    die(json_encode($toReturn));
}


function makeRequest()
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
     <ldb:numRows>10</ldb:numRows>
     <ldb:crs>LEW</ldb:crs>
     <!--Optional:-->
     <ldb:filterCrs>LBG</ldb:filterCrs>
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
        die(json_encode([
            'error'   => 'could not get data',
            'message' => "Couldn't get data"
        ]));
    }

    return xmlToJson($response);
}

function xmlToJson($string)
{
//    $string = str_ireplace("lt4:", "", $string);
//    $string = str_ireplace("lt5:", "", $string);
//    $string = str_ireplace("lt:", "", $string);
    $string = preg_replace("/lt[0-9]*?:/i", "", $string);
    $data = XML2Array::createArray($string);

    $json = json_encode($data['soap:Envelope']['soap:Body']['GetDepartureBoardResponse']['GetStationBoardResult']);

    return $json;
}