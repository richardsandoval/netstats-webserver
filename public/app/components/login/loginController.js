/**
 * Created by rsandoval on 17/11/15.
 */
'use strict';


netstats.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

netstats.controller('LoginController', function ($scope, $location, $http, $window) {

    if ($window.session) {
        if ($window.session.token) {
            $location.path('/index');
            return;
        }
    }


    $scope.loginCtrl = function () {
        var request = {
            user: $scope.user,
            pwr: $scope.pwr
        };
        console.log(" klk");
        $http({
            url: 'http://localhost:8081/api/account/login',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            data: request,
            dataType: 'jsonp'

        }).success(function (data) {

            id(data.token)
            {
                $window.session = data;
                console.log($window.session);
                $location.path('/index');
            }

        }).error(function (data) {
            delete $window.session;
        });

    };
});