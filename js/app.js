var myApp = angular.module('myApp', []);

myApp.controller('appController', ['$scope', ($scope) => {
  $scope.message = "welcome message!";
}])
