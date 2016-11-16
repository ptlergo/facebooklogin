myApp.controller('registrationController',
  ['$scope', '$firebaseAuth', 'FIREBASE_URL',
  function($scope, $firebaseAuth, FIREBASE_URL) {
    var c = 'https://facebooklogin-4a1ff.firebaseio.com';
    // inittialize firebase

    $scope.login = function() {
      $scope.message = "You're logged in under email: " + $scope.user.email;

    };

    $scope.register = function() {

    };
}]);
