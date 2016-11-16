myApp.controller('LoginController', ['$scope', function($scope) {
  $scope.login = function() {
    $scope.message = "You're logged in under email: " + $scope.user.email;
  };
}]);
