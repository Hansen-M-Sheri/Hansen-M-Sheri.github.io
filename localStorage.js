//Object constructor 
function User(fName, lName, email){
	this.email = email;
	this.lName = lName;
	this.fName = fName;
	this.timesClickedBlue = 0;
	this.timesClickedRed = 0;
	this.stepsCompleted = 0;
	var steps = {
		"step0": "Begin the steps",
		"step1":"Decide what you want to store",
		"step2": "Check that localStorage is defined in browser",
		"step3": "Set storage using 'localStorage.setItem(\"key\", \"value\")'",
		"step4": "Close the browser to simulate test of user",
		"step5": "Open browser & retrieve with localStorage.getItem(\"key\")",
		"step6": "If item is a JSON string, parse it",
		"step7": "Use the data - congrats you have used localStorage!",
		"step8": "Remove the data by using 'localStorage.removeItem(\"key\")'"
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
	var fName = document.getElementById("form").fName;
	var lName = document.getElementById("form").lName;
	var email = document.getElementById("form").email;
	var newUser = new User(fName, lName, email);
	//set the data in local storage
	// if(typeof(storage) !== "undefined") {
		//store user info
		localStorage.setItem("fName", newUser.fName.value);
		localStorage.setItem("lName", newUser.lName.value);
		localStorage.setItem("email", newUser.email.value);
		localStorage.setItem("timesClickedBlue", newUser.timesClickedBlue.value);
		localStorage.setItem("timesClickedRed", newUser.timesClickedRed.value);
		localStorage.setItem("stepsCompleted", newUser.stepsCompleted.value);
		localStorage.setItem("stepsCompleted", JSON.stringify(newUser.steps.value));
		
		var str = "User: <br> fName: "+ fName + "<br>lName: "+ lName +"<br>Email: " + email;
		document.getElementById("demoUserData").innerHTML = str;
	// }
	// else {
	// 	document.getElementById("demoUserData").innerHTML = "Sorry, your browser does not support Web Storage...";
	// }
	

}

//

