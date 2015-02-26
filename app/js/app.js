'use strict';

/* App */

var giphyApp = angular.module('giphyApp', ['giphyControllers', 'giphyServices',
  'giphyDirectives', 'giphyFilters', 'ngRoute']);

giphyApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/giphy_home.html',
    }).
    otherwise({
      redirectTo: '/home'
    })
}])
