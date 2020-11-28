//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC8mnFks131f81XyiS422p1fbWCq2krV6k",
      authDomain: "kwitter-app-f1016.firebaseapp.com",
      databaseURL: "https://kwitter-app-f1016.firebaseio.com",
      projectId: "kwitter-app-f1016",
      storageBucket: "kwitter-app-f1016.appspot.com",
      messagingSenderId: "1086505816092",
      appId: "1:1086505816092:web:187d0a0a7fc2111e204fd9",
      measurementId: "G-SYWLT6N5DE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

