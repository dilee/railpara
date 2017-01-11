var railPaaraApp = angular.module('railPaaraApp', []);

railPaaraApp.controller('loginController', function ($scope, $http) {

    $scope.baseURL = "http://35.163.10.213/";

    if (sessionStorage.getItem('user')) {
        window.location = 'home.html'
    }

    $scope.login = function (username, password) {



        var body = {
            "email": username,
            "password": password
        };

        $http.post($scope.baseURL + 'login', body)
            .then(function (res) {
                if (!res.data.error) {
                    console.log(res.data);
                    sessionStorage.setItem("user", res.data);
                    window.location = 'home.html';
                }
                else {

                }
            }, function (res) {
                console.log(res);
            });
    };
});

railPaaraApp.controller('registerController', function ($scope, $http) {

    $scope.baseURL = "http://35.163.10.213/";

    $scope.register = function (email, name, password, confPassword) {

        if (password !== confPassword) {

        }
        else {

            var body = {
                "email": email,
                "password": password,
                "firstname": name.split(' ')[0],
                "lastname": name.split(' ')[1]
            };

            $http.post($scope.baseURL + 'signup', body)
                .then(function (res) {
                    if (!res.data.error) {
                        console.log(res.data);
                        if (res.data.ok == 1) {
                            window.location = 'index.html';
                        }

                    }
                    else {

                    }
                }, function (res) {
                    console.log(res);
                });
        }

    };
});

railPaaraApp.controller('logoutController', function ($scope) {

    $scope.logout = function () {
        sessionStorage.removeItem('user');
        console.log("Hit!");
        window.location='index.html';
    };



});