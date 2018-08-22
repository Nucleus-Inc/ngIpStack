(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'angular'], factory);
    } else if (typeof exports === 'object') {
        factory(exports, require('angular'));
    } else {
        factory((root.ngIpStack = {}), root.angular);
    }
}(this, function (exports, angular) {
'use strict';

var NgIpStack = 'ipStack';
var ipStackModule = angular.module('ipStack', []);
ipStackModule.factory('requester', ['$http', function ($http) {
  var apiKey = null;
  return {
    getIp: function getIp() {
      return $http.get('https://api.ipstack.com/check?access_key=' + apiKey).then(function (result) {
        return result;
      }).catch(function (err) {
        return err;
      });
    },
    setApiKey: function setApiKey(accessKey) {
      apiKey = accessKey;
    },
    getApiKey: function getApiKey() {
      return apiKey;
    }
  };
}]);

exports.ngIpStack = NgIpStack;
}));
