var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  var regState = {
    name: 'register',
    url: '/register',
    templateUrl: '../views/register.html'
  }

  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: '../views/login.html'
  }

  $stateProvider.state(regState);
  $stateProvider.state(loginState);
});
