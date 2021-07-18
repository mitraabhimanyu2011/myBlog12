room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");
//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD7-Pct3TzUy3325kdgaJL3Z9ktl14S8TY",
      authDomain: "classtest-9c9fa.firebaseapp.com",
      databaseURL: "https://classtest-9c9fa-default-rtdb.firebaseio.com",
      projectId: "classtest-9c9fa",
      storageBucket: "classtest-9c9fa.appspot.com",
      messagingSenderId: "1033642723746",
      appId: "1:1033642723746:web:3c43f61acc353734e3cafb",
      measurementId: "G-R3EJX1HZSZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}