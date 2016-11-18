myApp.controller('loginController',
  ['$scope', '$firebaseAuth',
  function($scope, $firebaseAuth) {
    var configB = {
      apiKey: "AIzaSyAw0vo20GbssVKhraKrkdQgwV2oALGjNDk",
      authDomain: "facebooklogin-4a1ff.firebaseapp.com",
      databaseURL: "https://facebooklogin-4a1ff.firebaseio.com",
      storageBucket: "facebooklogin-4a1ff.appspot.com",
      messagingSenderId: "998356488921"
    };

    firebase.initializeApp(configB);
    var ref = firebase.database().ref();
    var auth = $firebaseAuth(firebase.auth());
    var database = firebase.database();


    // Login function
    $scope.login = function() {
      $scope.message = "You're logged in under email: " + $scope.user.email;

    };
}]);
