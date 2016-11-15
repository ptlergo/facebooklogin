var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  const regState = {
    name: 'register',
    url: '/register',
    controller: 'registrationController',
    templateUrl: '../views/register.html'
  }

  const loginState = {
    name: 'login',
    url: '/login',
    controller: 'loginController',
    templateUrl: '../views/login.html'
  }

  const successState = {
    name: 'success',
    url: '/success',
    controller: 'successController',
    templateUrl: '../views/success.html'
  }

  $stateProvider.state(regState);
  $stateProvider.state(loginState);
  $stateProvider.state(successState);
});
