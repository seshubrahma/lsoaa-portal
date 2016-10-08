function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
        function(result) {
            console.log("login success!", result);
            userExists(exists, doesntExist);
        }
    ).catch(
        function(error) {
            console.log("login failed", error);
        }
    );
}

function getCurrentUser() {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users').child(userId).once('value').then(
        function(snapshot) {
            console.log("user data", snapshot.val());
        }
    ).catch(
        function(error) {
            console.log("error retrieving data", error);
        }
    );
}

function writeUserData() {
    var userId = firebase.auth().currentUser.uid;

    var data = {
        name: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email
    };

    var ref = firebase.database.ref('users').child(userId);

    ref.set(data);
}

function exists(role){
   console.log("User exists!!");
   var lightBox = $("#lightBox");
   lightBox.hide();
   switch(role){
       case "mentor":
           window.location.href = "location";
           break;
       case "admin":
           window.location.href = "location";
           break;
       case "coach":
           window.location.href = "location";
           break;
       default:
           doesntExist();
           break;
       }
   }
   window.location.href = "location";
}

function doesntExist(){
    console.log("User does not exist!!");
    var lightBox = $("#lightBox");
    lightBox.show();
    
}

function saveInfo() {
   var role = $("#role").val();
}

function init() {

}

$(document).ready(init);
