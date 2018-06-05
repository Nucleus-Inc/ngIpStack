# ngIpStack

[![Build Status](https://travis-ci.org/Nucleus-Inc/ngIpStack.svg?branch=master)](https://travis-ci.org/Nucleus-Inc/ngIpStack)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![npm](https://img.shields.io/npm/v/ngipstack.svg)](https://www.npmjs.com/package/ngipstack)

The unofficial [IpStack](https://ipstack.com/) SDK for AngularJS (AKA Angular 1)

## Requirements

- [Angular.js](http://angularjs.org)

## Installation

### Add library

You can get it on npm.

```shell
$ npm install --save ngIpStack
```

```html
<script type="text/javascript" src="/ngipstack/dist/ngIpStack.min.js"></script>
```
### Add dependency

```javascript
var app = angular.module('myModule', ['ipStack']);
```
## Usage

### Set your api key

```javascript
app.controller('myController', ['$scope', 'requester',
    function myController($scope, requester) {

        requester.setApiKey('your-api-key-ip-stack');

        console.log(requester.getApi());

    }
]);
```

### Get your IP Address

```javascript
app.controller('myController', ['$scope', 'requester',
    function myController($scope, requester) {

        requester.setApiKey('your-api-key-ip-stack');

        requester.getIp().then(function(res){

          var myIpAddress = res.data.ip;

          console.log(myIpAddress);

        });

    }
]);
```

## Build

```
$ yarn install
$ gulp build
```

### Tests

- Unit:
 - Uses [Karma](http://karma-runner.github.io) + [Jasmine](http://jasmine.github.io/)
 - Files: `specs/*.spec.js`

```
$ gulp test
```
