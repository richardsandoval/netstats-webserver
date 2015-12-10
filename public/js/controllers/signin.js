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
        signService.signIn(auth)
            .then(function (data) {
                console.log(data);
                $sessionStorage.data = data;
                $state.go('app.dashboard-v1');
            })
            .catch(function (err) {
                console.log(err);
                $scope.authError = err.message;
            });

    };
}]);