var railPaaraApp = angular.module('railPaaraApp', []);

railPaaraApp.controller('loginController', function ($scope, $http) {

    $scope.baseURL = "http://35.163.10.213/";

    $scope.message = 'bla bla';
    $scope.login = function (username, password) {

        var body = {
            "email": $scope.username,
            "password": $scope.password
        };

        $http.post($scope.baseURL +'login', body)
            .then(function(res) {
                console.log(res);
            }, function(res) {
                console.log(res);
            });
    };


});