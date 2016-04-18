/**
 * Created by sijiehao on 16/04/2016.
 */
var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
   $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main',
            controller: 'mainCtrl'
        })
});

app.controller('mainCtrl', function($scope) {
    $scope.myVar = "hello angular";
});