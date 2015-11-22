/**
 * Created by rsandoval on 17/11/15.
 */
'use strict';

var netstats = angular.module('netstatsApp', ['ngRoute', 'ngResource']);


netstats.config(function ($routeProvider) {
    $routeProvider
        .when('/index', {
            controller: 'DashboardController',
            templateUrl: 'app/components/dashboard/dashboardView.html'
        })
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'app/components/login/loginView.html'
        });
});


