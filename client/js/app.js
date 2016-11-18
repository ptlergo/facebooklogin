var myApp = angular.module('myApp',
  ['ui.router', 'firebase'])
  .constant('FIREBASE_URL', 'https://facebooklogin-4a1ff.firebaseio.com');

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

  const firebaseState = {
    name: 'firebaseui',
    url: '/firebaseui',
    controller: 'firebaseuiController',
    templateUrl: '../views/firebaseui.html'
  }

  const successState = {
    name: 'success',
    url: '/success',
    controller: 'SuccessController',
    templateUrl: '../views/success.html'
  }

  $stateProvider.state(regState);
  $stateProvider.state(firebaseState);
  $stateProvider.state(loginState);
  $stateProvider.state(successState);
});
