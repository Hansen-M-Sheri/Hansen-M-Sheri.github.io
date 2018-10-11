//Object constructor 
function User(fName, lName, email){
	this.email = email;
	this.lName = lName;
	this.fName = fName;
	this.timesClickedBlue = 0;
	this.timesClickedRed = 0;
	this.stepsCompleted = 0;

}

function clickBlueButton(){
	
	this.timesClickedBlue  = localStorage.timesClickedBlue ;
	localStorage.setItem(timesClickedBlue) = timesClickedBlue + 1;
	localStorage.setItem(stepsCompleted) = 1;
	document.getElementById("blue").innerHTML = "You clicked the blue button " + timesClickedBlue + " times";

}

function clickRedButton(){
this.timesClickedRed  = localStorage.timesClickedRed ;
	localStorage.setItem(timesClickedRed) = timesClickedRed + 1;
	this.stepsCompleted = 1;
	document.getElementById("red").innerHTML = "You clicked the red button " + timesClickedRed + " times";
}

function createUser(){
	var form = document.getElementById("form");
	var fName = document.getElementById("form").fName.value;
	var lName = document.getElementById("form").lName.value;
	var email = document.getElementById("form").email.value;
	var newUser = new User(fName, lName, email);
	//set the data in local storage
		//we can store it item by item
		localStorage.setItem("fName", fName);
		localStorage.setItem("lName", lName);
		localStorage.setItem("email", email);
		localStorage.setItem("timesClickedBlue", newUser.timesClickedBlue);
		localStorage.setItem("timesClickedRed", newUser.timesClickedRed);
		localStorage.setItem("stepsCompleted", newUser.stepsCompleted);
		localStorage.setItem("stepsCompleted", JSON.stringify(newUser.steps));
		//or we can store the entire object - very useful
		localStorage.setItem("user", JSON.stringify(newUser));

		var str = "User: <br> fName: "+ fName + "<br>lName: "+ lName +"<br>Email: " + email + 
		"<br> Times Blue Button Clicked: " + newUser.timesClickedBlue + 
		"<br> Times Red Button Clicked: " + newUser.timesClickedRed +
		"<br> Steps Completed: " + newUser.stepsCompleted ; 
		
		document.getElementById("demoUserData").innerHTML = str;
		//console.log(JSON.parse(localStorage.getItem('user')));
	// }
	// else {
	// 	document.getElementById("demoUserData").innerHTML = "Sorry, your browser does not support Web Storage...";
	// }
	

}

function storeData() {
		
		//create a user from what we got from the localStorage
		var newUser = JSON.parse(localStorage.getItem('user'));
		var steps = {
		"step 0": "Begin the steps",
		"step 1":"Decide what you want to store",
		"step 2": "Check that localStorage is defined in browser",
		"step 3": "Set storage using 'localStorage.setItem(\"key\", \"value\")'",
		"step 4": "Close the browser to simulate test of user",
		"step 5": "Open browser & retrieve with localStorage.getItem(\"key\")",
		"step 6": "If item is a JSON string, parse it",
		"step 7": "Use the data - congrats you have used localStorage!",
		"step 8": "Remove the data by using 'localStorage.removeItem(\"key\")'"
	}
		newUser.stepsCompleted = 7;
	//update clickTimes & steps
		localStorage.setItem("timesClickedBlue", newUser.timesClickedBlue);
		localStorage.setItem("timesClickedRed", newUser.timesClickedRed);
		localStorage.setItem("stepsCompleted", newUser.stepsCompleted);
		localStorage.setItem("steps", JSON.stringify(steps));

		//store entire user


		document.getElementById("store").innerHTML = "Items have been stored. Close browser"

}

function retrieveData() {
	var newUser = JSON.parse(localStorage.getItem('user'));
	var steps = JSON.parse(localStorage.getItem("steps"));
	var str = " ";
	//print out user object
	str += "Here is the data that was stored in Local Storage for you: <br>";
	str += "User { " + 
	"<br>fName: " + newUser.fName + 
	"<br>lName: " + newUser.lName +
	"<br>email: " + newUser.email +
	"<br>timesClickedBlue: " + newUser.timesClickedBlue +
	"<br>timesClickedRed: " + newUser.timesClickedRed +
	"<br>stepsCompleted: " + newUser.stepsCompleted + "<br>";
	
	for (index in steps) {
		str += index + ": " + steps[index] + "<br>";
	}
	str += "}";

	document.getElementById("retrieve").innerHTML = str;
}
//

