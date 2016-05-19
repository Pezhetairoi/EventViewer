
var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){

    var routeRoleChecks = {
        admin: {auth: function(mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin');
        }},
        user: {auth: function(mvAuth) {
            return mvAuth.authorizeLoggedInUserForRoute();
        }}
    };

    $locationProvider.html5Mode(true);

    $routeProvider
        //default route
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mvMainCtrl'
        })
        //admin-only page route
        .when('/admin/users', {
            templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl',
            resolve: routeRoleChecks.admin
        })
        .when('/newEvent', {
            templateUrl: '/partials/admin/new-event',
            controller: 'mvNewEventCtrl',
            resolve: routeRoleChecks.admin
        })
        //sign-up route
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        //use profile route
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl',
            resolve: routeRoleChecks.user
        })
        //events route
        .when('/events', {
            templateUrl: '/partials/events/event-list',
            controller: 'mvEventListCtrl'
        })
        //events detail route
        .when('/events/:id', {
            templateUrl: '/partials/events/event-details',
            controller: 'mvEventDetailsCtrl'
        })
        //update event route
        .when('/events/:id/update', {
            templateUrl: '/partials/admin/event-update',
            controller: 'mvUpdateEventCtrl'
        })
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
});