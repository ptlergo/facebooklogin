myApp.controller('RegistrationController', ['$scope', function($scope) {
  $scope.register = function() {
    $scope.message = "Thank you for registering, " + $scope.user.firstname;
  };
}]);
