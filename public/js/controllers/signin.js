'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$state', '$sessionStorage', 'signService', function ($scope, $state, $sessionStorage, signService) {

    if ($sessionStorage.data) {
        $state.go('app.dashboard-v1');
    } else {
        $state.go('access.signin');
    }

    $scope.user = {};
    $scope.authError = null;

    $scope.login = function () {
        var auth = {
            user: $scope.user.email,
            pwr: $scope.user.password
        };
        var data = signService.signIn(auth);

        if (data) {

            if (data.err) {
                $scope.authError = data.err.message;
            }
            if (data.data) {
                $sessionStorage.data = data.data;
                $state.go('app.dashboard-v1');
            }
        }
    };
    //$scope.login = function () {
    //    $scope.authError = null;
    //    // Try to login
    //    $http.post(app.api + '/account/login', {user: $scope.user.email, pwr: $scope.user.password})
    //        .then(function (response) {
    //            if (!response.data.user) {
    //                $scope.authError = 'Email or Password not right';
    //            } else {
    //                $sessionStorage.data = response.data;
    //                $state.go('app.dashboard-v1');
    //            }
    //        }, function () {
    //            $scope.authError = 'Server Error';
    //        });
    //};
}]);