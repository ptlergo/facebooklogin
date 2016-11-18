myApp.controller('firebaseuiController',
  ['$scope', '$firebaseAuth',
  function($scope, $firebaseAuth) {
    // Initialize Firebase
    var configC = {
      apiKey: "AIzaSyAw0vo20GbssVKhraKrkdQgwV2oALGjNDk",
      authDomain: "facebooklogin-4a1ff.firebaseapp.com",
      databaseURL: "https://facebooklogin-4a1ff.firebaseio.com",
      storageBucket: "facebooklogin-4a1ff.appspot.com",
      messagingSenderId: "998356488921"
    };

    var uiConfig = {
        'signInFlow': 'popup',
        'signInSuccessUrl': '#/success',
        'signInOptions': [
          { provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,},
          { provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes :[
              'public_profile',
              'email',
              'user_likes',
              'user_friends'
            ]
          },
          { provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, },
        ],

        'callbacks': {
          // Called when the user has been successfully signed in.
          'signInSuccess': function(user, credential, redirectUrl) {
            handleSignedInUser(user);
            // Do not redirect.
            return false;
          }
        },
      };

    var signInWithPopup = function() {
      window.open('/widget', 'Sign In', 'width=985,height=735');
    };

    var app = firebase.initializeApp(configC);
    var auth = app.auth();
    var ui = new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);
}]);
