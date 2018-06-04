'use strict';

/* App Module */
var sampleApp = angular.module('sampleApp', [
  'ngRoute',
  'sampleAppControllers',
  'ipStack'
]);

sampleApp.config(['$routeProvider','$locationProvider',
  function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('')
    $routeProvider.when('/', {
      templateUrl: 'partials/listIp.html',
      controller: 'ListIpCtrl as listIpCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }
]);
