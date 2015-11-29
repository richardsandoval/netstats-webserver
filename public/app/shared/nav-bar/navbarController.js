/**
 * Created by rsandoval on 22/11/15.
 */
'use strict';

netstats.controller('NavbarCtrl', function ($scope, $location) {
        $scope.isActive = function (path) {
            var currentPath = $location.path().split('/')[1];
            if (currentPath.indexOf('?') !== -1) {
                currentPath = currentPath.split('?')[0];
            }
            return currentPath === path.split('/')[1];
        };
    });