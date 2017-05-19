/**
 * Created by duncanogle on 01/05/2017.
 */
var app = angular.module('app', []);

app.controller('HomeController', ['$scope', 'Tube', 'Weather', 'NationalRail', 'Geo', function ($scope, Tube, Weather, NationalRail, Geo) {
    $scope.loaded = true;
    $scope.data = {
        weather: null,
        tube: null,
        rail: null
    };

    $scope.geoLocationFailure = false;
    $scope.destinationRailFailure = false;
    $scope.expanded = {
        trains: false,
        weather: false
    };

    Tube.get().then(function (response) {
        $scope.data.tube = response.data;
    });
    NationalRail.get().then(function (response) {
        if (response.data.error) {
            $scope.destinationRailFailure = true;
        }

        $scope.data.rail = response.data;
    });

    Geo.get().then(function success(response) {
        Weather.get(response).then(function (response) {
            $scope.data.weather = response.data;
        });
    }, function failure() {
        $scope.geoLocationFailure = true;
        Weather.get().then(function (response) {
            $scope.data.weather = response.data;
        });
    });
}]);

app.factory('Tube', ['$http', function ($http) {
    var severityMap = [
        "Special Service",
        "Closed",
        "Suspended",
        "Part Suspended",
        "Planned Closure",
        "Part Closure",
        "Severe Delays",
        "Reduced Service",
        "Bus Service",
        "Minor Delays",
        "Good Service",
        "Part Closed",
        "Exist Only",
        "No Step Free Access",
        "Change of frequency",
        "Diverted",
        "Not Running",
        "Issues Reported",
        "No Issues",
        "Information",
        "Service Closed"
    ];

    return {
        get: function () {
            return $http.get('/api.php?type=tube');
        },
        statusToText: function (level) {
            return severityMap[level];
        }
    };
}]);

app.factory('Geo', ['$q', function ($q) {

    navigator.geolocation.getCurrentPosition(function (position) {
        return {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        }
    });
    return {
        get: function () {
            var deferred = $q.defer();
            navigator.geolocation.getCurrentPosition(function (position) {
                deferred.resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            }, function failure(response) {
                deferred.reject(response);
            }, {timeout: 10000});
            return deferred.promise;
        }
    };
}]);

app.factory('Weather', ['$http', function ($http) {
    return {
        get: function (position) {
            var params = {
                type: 'weather'
            };

            if (position) {
                params.lat = position.lat;
                params.lon = position.lon;
            }

            return $http({
                url: '/api.php',
                method: 'GET',
                params: params
            });
        }
    };
}]);

app.factory('NationalRail', ['$http', function ($http) {
    return {
        get: function () {
            return $http({
                url: '/api.php',
                method: 'GET',
                params: {
                    type: 'rail'
                }
            });
        }
    };
}]);

app.filter('trustHtml', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.filter('severityToText', ['Tube', function (Tube) {
    return function (text) {
        return Tube.statusToText(text);
    };
}]);