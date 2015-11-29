/**
 * Created by rsandoval on 22/11/15.
 */
'use strict';
netstats.directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'navbar.html',
            controller: 'NavbarCtrl'
        };
    });