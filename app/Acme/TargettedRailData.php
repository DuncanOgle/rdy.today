<?php
/**
 * Created by PhpStorm.
 * User: duncanogle
 * Date: 20/05/2017
 * Time: 15:26
 */

namespace App\Acme;

use App\Acme\RailData;

class TargettedRailData {
    static function lines() {
        $approvedStationList = ["LEW","LBG","CHX","CST","WAT","WAE","GTW","TBD","BTN","EUS","MAN","BON","CTR","FLN"];

        $approved = array_filter(RailData::lines(), function ($element) use ($approvedStationList) {
            return in_array($element, $approvedStationList);
        }, ARRAY_FILTER_USE_KEY);

        return $approved;
    }
}