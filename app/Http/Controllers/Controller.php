<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    //

    function successResponse($data)
    {
        return response()->json([
            "status" => "success",
            "data"   => $data
        ]);
    }

    function failingResponse($message)
    {
        return response()->json([
            "status"  => "fail",
            "message" => $message
        ]);
    }
}
