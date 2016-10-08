
/*
var reference =   
    firebase.database().ref('coaches').child('uid_003');

reference.once('value')
    .then(
        function(snapshot) {
        	var stuff= snapshot.val();
            //console.log("user data", snapshot.val());
            console.log("name "+stuff['name']);
        }
    ).catch(
        function(error) {
            console.log("error retrieving data", error);
        }
    );

var data = {
    name: 'Rodrigo',
    email: 'rvn2010@hotmail.es'
};

var ref = firebase.database().ref('users').child(userId);

ref.update(data);

var yesCallback = function(role){
	console.log(role+" works");
}
var noCallback = function(){
	console.log("doesnt work");
}
*/
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


//	userExists("uid_001",yesCallback,noCallback);
