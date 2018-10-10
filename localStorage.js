//Object constructor 
function User(fName, lName, email){
	this.email = email;
	this.lName = lName;
	this.fName = fName;
	this.timesClickedBlue = 0;
	this.timesClickedRed = 0;
	this.stepsCompleted = 0;
	var stepsCompleted = {
		"step0" = "Begin the steps";
		"step1" = "Decide what you want to store";
		"step2" = "Check that localStorage is defined in browser";
		"step3"	= "Set storage using 'localStorage.setItem(\"key\", \"value\")'";
		"step4" = "Close the browser to simulate test of user";
		"step5" = "Open browser & retrieve with localStorage.getItem(\"key\")";
		"step6" = "If item is a JSON string, parse it";
		"step7" = "Use the data - congrats you have used localStorage!";
		"step8" = "Remove the data by using 'localStorage.removeItem(\"key\")'";
	}
}

function clickBlueButton(){
	this.timesClickedBlue++;
	this.stepsCompleted = 1;

}

function clickRedButton(){
	this.timesClickedRed++;
	this.stepsCompleted = 1;

}

function createUser(){
	var form = document.getElementById("form");
	var fName = document.getElementById("form").fName;
	var lName = document.getElementById("form").lName;
	var email = document.getElementById("form").email;
	User newUser = User(fName, lName, email);
	var str = "User: <br> fName: "+ fName + "<br>lName: "+ lName +"<br>Email: " + email;
	document.getElementById("demoUserData").innerHTML = str;
}