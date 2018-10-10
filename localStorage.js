//Object constructor 
function User(fName, lName, email){
	this.email = email;
	this.lName = lName;
	this.fName = fName;
	this.timesClickedBlue = 0;
	this.timesClickedRed = 0;
	this.stepsCompleted = 0;
	var steps = {
		"0": "Begin the steps",
		"1":"Decide what you want to store",
		"2": "Check that localStorage is defined in browser",
		"3": "Set storage using 'localStorage.setItem(\"key\", \"value\")'",
		"4": "Close the browser to simulate test of user",
		"5": "Open browser & retrieve with localStorage.getItem(\"key\")",
		"6": "If item is a JSON string, parse it",
		"7": "Use the data - congrats you have used localStorage!",
		"8": "Remove the data by using 'localStorage.removeItem(\"key\")'"
	}
}

function clickBlueButton(){
	// localStorage.timesClickedBlue++;
	this.timesClickedBlue++;
	this.stepsCompleted = 1;
	document.getElementById("blue").innerHTML = "You clicked the blue button";

}

function clickRedButton(){

	this.timesClickedRed++;
	this.stepsCompleted = 1;
	document.getElementById("red").innerHTML = "You clicked the red button";
}

function createUser(){
	var form = document.getElementById("form");
	var fName = document.getElementById("form").fName.value;
	var lName = document.getElementById("form").lName.value;
	var email = document.getElementById("form").email.value;
	var newUser = new User(fName, lName, email);
	//set the data in local storage
	// if(typeof(storage) !== "undefined") {
		//store user info
		localStorage.setItem("fName", fName);
		localStorage.setItem("lName", lName);
		localStorage.setItem("email", email);
		// localStorage.setItem("timesClickedBlue", String(newUser.timesClickedBlue.value));
		// localStorage.setItem("timesClickedRed", newUser.timesClickedRed.value);
		// localStorage.setItem("stepsCompleted", newUser.stepsCompleted.value);
		localStorage.setItem("stepsCompleted", JSON.stringify(newUser.steps));
		localStorage.setItem('user', JSON.stringify(newUser));

		var str = "User: <br> fName: "+ fName + "<br>lName: "+ lName +"<br>Email: " + email + 
		"<br> Times Blue Button Clicked: " + localStorage.timesClickedBlue + 
		"<br> Times Red Button Clicked: " + localStorage.timesClickedRed +
		"<br> Steps Completed: " + localStorage.stepsCompleted ; 
		
		document.getElementById("demoUserData").innerHTML = str;
		console.log(JSON.parse(localStorage.getItem('user')));
	// }
	// else {
	// 	document.getElementById("demoUserData").innerHTML = "Sorry, your browser does not support Web Storage...";
	// }
	

}

//

