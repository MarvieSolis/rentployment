console.log("HI");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3aVsRAF7FZCXFNzMA4m2gvsPeH-_p_O8",
    authDomain: "apiproject-f1054.firebaseapp.com",
    databaseURL: "https://apiproject-f1054.firebaseio.com",
    projectId: "apiproject-f1054",
    storageBucket: "apiproject-f1054.appspot.com",
    messagingSenderId: "849810172648"
  };

  firebase.initializeApp(config);

  // Creating a variable to reference the database.
var database = firebase.database();

var name = "";
var email = "";
var experience = "";
var comments = "";
var suggestion = "";

$("#submitButton").on("click", function(){
    event.preventDefault();
    
    name = $("#userName").val().trim();
    email = $("#userEmail").val().trim();
    experience = $("#userName").val().trim();
    comments = $("#userComment").val().trim();
    suggestion = $("#userImprovement").val().trim();

    database.ref().push({
        name: name,
        email: email,
        experience: experience,
        comments: comments,
        suggestion: suggestion,
        dataAdded: firebase.database.ServerValue.TIMESTAMP
    });


    location.reload(true);


console.log(name);

});

