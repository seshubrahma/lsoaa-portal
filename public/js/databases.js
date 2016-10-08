function getUID () {
	var userId = firebase.auth().currentUser.uid;
	return userId;
}

function assignMentor(mentorID , school){

var reference = firebase.database().ref('mentors').child(mentorID);

reference.once('value')
    .then(
        function(snapshot) {
        	var stuff= snapshot.val();
            var ref = firebase.database().ref('schools').child(mentorID);
			ref.set(data);
        }
    ).catch(
        function(error) {
            console.log("error retrieving data", error);
        }
    );
}

function logIn (){
	var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth.signInWithPopup(provider).then(
        function(result) {
            userExists();
        }
    ).catch(
        function(error) {
            
        }
    );
}

function userExists (yesCallback, noCallback)   {
	var id= firebase.auth().currentUser.uid;
	var ref = firebase.database().ref('users').child(id);
	ref.once('value')
    .then(
        function(snapshot) {
        	if(snapshot.exists()){
        		yesCallback(snapshot.val());        	
        	} else {
        		noCallback();
        	}
        }
    ).catch(
        function(error) {

        }
    );	
}

function newUser(role) {
    var id= firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('users').child(id);
}


