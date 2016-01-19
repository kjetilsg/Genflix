var genflixApp = angular.module('genflixApp', []);

genflixApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {

    $http.get('json/data.json').success(function (data) {
        $scope.genreList = data;
    });

    $scope.getNumber = (function() {
        num = "3";
    });

}]);
