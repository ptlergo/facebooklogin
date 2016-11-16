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
    controller: 'registrationController',
    templateUrl: '../views/login.html'
  }

  const successState = {
    name: 'success',
    url: '/success',
    controller: 'SuccessController',
    templateUrl: '../views/success.html'
  }

  $stateProvider.state(regState);
  $stateProvider.state(loginState);
  $stateProvider.state(successState);
});
