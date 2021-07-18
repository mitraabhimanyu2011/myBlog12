var firebaseConfig = {
    apiKey: "AIzaSyCvH6DiOak_XJHDzwVArWt8MgJUBVjF0aU",
    authDomain: "classtest-fc324.firebaseapp.com",
    databaseURL: "https://classtest-9c9fa-default-rtdb.firebaseio.com",
    projectId: "classtest-fc324",
    storageBucket: "classtest-fc324.appspot.com",
    messagingSenderId: "944569820199",
    appId: "1:944569820199:web:26e71e032289647b731a02",
    measurementId: "G-BJJNQPT5Z2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = " Welcome, " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name, room_name")

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div<hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "part1.html";
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "part3.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "part3.html";
}