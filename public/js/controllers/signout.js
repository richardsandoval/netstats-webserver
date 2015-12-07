/**
 * Created by rsandoval on 29/11/15.
 */
'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', '$window', function ($scope, $http, $state, $window) {

    delete $window.data;

    $scope.user = {};
    $scope.authError = null;
    $scope.login = function () {
        $scope.authError = null;
        // Try to login
        $http.post(app.api + '/account/login', {user: $scope.user.email, pwr: $scope.user.password})
            .then(function (response) {
                if (!response.data.user) {
                    $scope.authError = 'Email or Password not right';
                } else {
                    $window.data = response.data;
                    $state.go('app.dashboard-v1');
                }
            }, function () {
                $scope.authError = 'Server Error';
            });
    };
}]);