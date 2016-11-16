  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAw0vo20GbssVKhraKrkdQgwV2oALGjNDk",
    authDomain: "facebooklogin-4a1ff.firebaseapp.com",
    databaseURL: "https://facebooklogin-4a1ff.firebaseio.com",
    storageBucket: "facebooklogin-4a1ff.appspot.com",
    messagingSenderId: "998356488921"
  };
  firebase.initializeApp(config);

myApp.controller('registrationController',
  ['$scope', '$firebaseAuth',
  function($scope, $firebaseAuth) {
    var ref = firebase.database().ref();
    var auth = $firebaseAuth(firebase.auth());

    $scope.login = function() {
      $scope.message = "You're logged in under email: " + $scope.user.email;

    };

    $scope.register = function() {
      auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password
      ).then(function(regUser) {
        $scope.message = "Hello " + $scope.user.firstname +
        ", thank you for registering";

      }).catch(function(error) {
        $scope.message = error.message;

      });
    };
}]);
