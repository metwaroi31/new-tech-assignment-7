// const angular = require('angular')
angular.module('routerRoutes', ['ngRoute'])

.config(($routeProvider, $locationProvider) => {
    $routeProvider
        .when('/', {
            templateUrl : '/views/pages/home.html',
            controller : 'homeController',
            controllerAs : 'home'
        })
        .when('/about', {
            templateUrl : '/views/pages/about.html',
            controller : 'aboutController',
            controllerAs : 'about'
        })  
        .when('/contact', {
            templateUrl : '/views/pages/contact.html',
            controller : 'contactController',
            controllerAs : 'contact'
        })  
    $locationProvider.html5Mode(true)
})