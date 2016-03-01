'use strict';

/**
 * @ngdoc overview
 * @name stockDogApp
 * @description
 * # stockDogApp
 *
 * Main module of the application.
 */
angular
  .module('stockDogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'googlechart'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/StockDog/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/StockDog/watchlist/:listId', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl'
      })
      .otherwise({
        redirectTo: '/StockDog/dashboard'
      });
  });
