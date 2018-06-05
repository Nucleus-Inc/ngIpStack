# ngIpStack

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
