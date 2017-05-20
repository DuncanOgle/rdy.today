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
        $scope.data.tube = response.data.data;
    });

    Geo.get().then(function success(response) {
        NationalRail.get(response).then(function (response) {
            $scope.data.rail = response.data.data;
        });
    }, function failure() {
        $scope.geoLocationFailure = true;
        NationalRail.get().then(function (response) {
            $scope.data.rail = response.data.data;
        });
    });

    Geo.get().then(function success(response) {
        Weather.get(response).then(function (response) {
            $scope.data.weather = response.data.data;
        });
    }, function failure() {
        $scope.geoLocationFailure = true;
        Weather.get().then(function (response) {
            $scope.data.weather = response.data.data;
        });
    });
}]);

app.factory('Tube', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/tube');
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
            var coords = '';

            if (position) {
                coords = position.lat + ',' + position.lon;
            }

            return $http.get('/api/weather/' + coords);
        }
    };
}]);

app.factory('NationalRail', ['$http', function ($http) {
    return {
        get: function (position) {
            var coords = '';

            if (position) {
                coords = '/' + position.lat + ',' + position.lon;
            }

            return $http.get('/api/rail/LEW/LBG' + coords);
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