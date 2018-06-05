'use strict';

/* Controllers */
var sampleAppControllers = angular.module('sampleAppControllers', []);

sampleAppControllers.controller('ListIpCtrl', ['$scope','requester',
  function($scope, requester) {

    var vm = this;

    requester.setApiKey('your-api-key-ip-stack');

    requester.getIp().then(function(res){
      vm.myIpAddress = res.data.ip || res.data.error.info;
    });

  }]);
