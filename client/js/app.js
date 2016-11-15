var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  var regState = {
    name: 'register',
    url: '/register',
    controller: 'registrationController',
    templateUrl: '../views/register.html'
  }

  var loginState = {
    name: 'login',
    url: '/login',
    controller: 'loginController',
    templateUrl: '../views/login.html'
  }

  $stateProvider.state(regState);
  $stateProvider.state(loginState);
});
