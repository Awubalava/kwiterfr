
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
    authDomain: "kwitter-6abca.firebaseapp.com",
    databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
    projectId: "kwitter-6abca",
    storageBucket: "kwitter-6abca.appspot.com",
    messagingSenderId: "231606977400",
    appId: "1:231606977400:web:d2d2878892c4b97584fe8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
  }