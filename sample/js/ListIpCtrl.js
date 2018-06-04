'use strict';

/* Controllers */
var sampleAppControllers = angular.module('sampleAppControllers', []);

sampleAppControllers.controller('ListIpCtrl', ['$scope','requester',
  function($scope, requester) {

    requester.setApiKey('a55f6757107c084b4c5b1a68e556956e')

    console.log(requester.getApi())

  }]);
