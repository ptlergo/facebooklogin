var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider'], ($stateProvider) => {
  $stateProvider
    .state("register",{
      url: "/register",
      templateUrl: "views/register.html",
      controller: "regContrller",
      controllerAs: "regCtrl"
    })
    .state("login",{
      url: "/login",
      templateUrl: "views/login.html",
      controller: "loginContrller",
      controllerAs: "loginCtrl"
    })
});
