myApp.controller('registrationController', ['$scope', function($scope) {
  $scope.login = function() {
    $scope.message = "Welcome" + $scope.user.email;
  };
}]);
