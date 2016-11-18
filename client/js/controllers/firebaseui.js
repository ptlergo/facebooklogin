myApp.controller('firebaseuiController',
  ['$scope', '$firebaseAuth',
  function($scope, $firebaseAuth) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAw0vo20GbssVKhraKrkdQgwV2oALGjNDk",
      authDomain: "facebooklogin-4a1ff.firebaseapp.com",
      databaseURL: "https://facebooklogin-4a1ff.firebaseio.com",
      storageBucket: "facebooklogin-4a1ff.appspot.com",
      messagingSenderId: "998356488921"
    };

    var uiConfig = {
        'signInSuccessUrl': '#/success',
        'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        'tosUrl': '#/register',
      };

    var app = firebase.initializeApp(config);
    var auth = app.auth();
    var ui = new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);

    var ref = firebase.database().ref();
    // var auth = $firebaseAuth(firebase.auth());
    // var provider = new firebase.auth.FacebookAuthProvider();




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

    $scope.fblogin = function() {
      $scope.message = 'message!';

    }
}]);
