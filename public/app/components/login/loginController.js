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
        $http({
            url: 'http://netstatspucmm.com/api/account/login',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            data: request,
            dataType: 'jsonp'

        }).success(function (data) {

            console.log(data.token);
            if(data.token)
            {
                $window.session = data;
                $location.path('/index');
            }

        }).error(function (data) {
            console.log(data);
            console.log('hola');
            delete $window.session;
        });

    };
});