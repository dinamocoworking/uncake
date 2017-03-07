import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsHkSgOwfonFyA8MkG2bqg41Kk3EYAElw",
    authDomain: "uncake-1a2f6.firebaseapp.com",
    databaseURL: "https://uncake-1a2f6.firebaseio.com",
    storageBucket: "uncake-1a2f6.appspot.com",
    messagingSenderId: "89511333315"
  };

var fire = firebase.initializeApp(config);
export default fire;
