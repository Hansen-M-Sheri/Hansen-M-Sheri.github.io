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
	this.timesClickedBlue ++;
	this.stepsCompleted = 1;
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("timesClickedBlue", timesClickedBlue);
		localStorage.setItem("stepsCompleted", stepsCompleted);
		document.getElementById("blue").innerHTML = "You clicked the blue button " + timesClickedBlue + " times";
	}
	else {
			document.getElementById("blue").innerHTML = "Your browser does not support web storage"
	}
}

function clickRedButton(){
	this.timesClickedRed  = localStorage.timesClickedRed ;
	this.timesClickedRed ++;
	this.stepsCompleted = 1;
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem("timesClickedRed", timesClickedRed);
		localStorage.setItem("stepsCompleted", stepsCompleted);
		document.getElementById("red").innerHTML = "You clicked the red button " + timesClickedRed + " times";
	}
	else {
			document.getElementById("red").innerHTML = "Your browser does not support web storage"
	}
}

function createUser(){
	var form = document.getElementById("form");
	var fName = document.getElementById("form").fName.value;
	var lName = document.getElementById("form").lName.value;
	var email = document.getElementById("form").email.value;
	var newUser = new User(fName, lName, email);
	//set the data in local storage
		//we can store it item by item
		if(typeof(Storage) !== "undefined"){
			localStorage.setItem("fName", fName);
			localStorage.setItem("lName", lName);
			localStorage.setItem("email", email);
			localStorage.setItem("timesClickedBlue", newUser.timesClickedBlue);
			localStorage.setItem("timesClickedRed", newUser.timesClickedRed);
			localStorage.setItem("stepsCompleted", newUser.stepsCompleted);
			//localStorage.setItem("stepsCompleted", JSON.stringify(newUser.steps));
			//or we can store the entire object - very useful
			localStorage.setItem("user", JSON.stringify(newUser));

			//Store an array of users - to demo storing arrays
			var rolesArray = ["Admin", "User", "SuperUser"];
			localStorage.setItem("userTypes", JSON.stringify(rolesArray));

			var str = "User: <br> fName: "+ fName + "<br>lName: "+ lName +"<br>Email: " + email + 
			"<br> Times Blue Button Clicked: " + newUser.timesClickedBlue + 
			"<br> Times Red Button Clicked: " + newUser.timesClickedRed +
			"<br> Steps Completed: " + newUser.stepsCompleted ; 

			str += "<br><br> Also storing an array of user types" + JSON.stringify(rolesArray);
			
			document.getElementById("demoUserData").innerHTML = str;
		}
		else {
			document.getElementById("demoUserData").innerHTML = "Your browser does not support web storage"
		}
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
		if(typeof(Storage) !== "undefined"){
			localStorage.setItem("stepsCompleted", newUser.stepsCompleted);
			localStorage.setItem("steps", JSON.stringify(steps));
			document.getElementById("store").innerHTML = "Items have been stored. Close browser"
		}
		else {
			document.getElementById("store").innerHTML = "Your browser does not support web storage"
		}
		//store entire user


		

}

function retrieveData() {
	if(typeof(Storage) !== "undefined"){
		var newUser = JSON.parse(localStorage.getItem('user'));
		var steps = JSON.parse(localStorage.getItem("steps"));
		var clickBlue = JSON.parse(localStorage.getItem("timesClickedBlue"));
		var clickRed = JSON.parse(localStorage.getItem("timesClickedRed"));
		var stepsCompleted = 8;
		var str = " ";
		//print out user object
		str += "Here is the data that was stored in Local Storage for you: <br>";
		str += "User Object{ " + 
		"<br>fName: " + newUser.fName + 
		"<br>lName: " + newUser.lName +
		"<br>email: " + newUser.email +
		"<br>timesClickedBlue: " + clickBlue +
		"<br>timesClickedRed: " + clickRed +
		"<br>stepsCompleted: " + stepsCompleted + "<br>} <br><br>";
		//print out steps Associative array (object literal)
		str += "Steps Associative Array:<br>"
		for (index in steps) {
			str += index + ": " + steps[index] + "<br>";
		}
		str += "}";
		//print out user data as an object
		str += "<br>ORIGINAL USER DATA - NOT UPDATED WITH STEPS <br>" + 
		"(just for demo purposes to show object) <br>" +
		"User: " + JSON.stringify(localStorage.getItem('user'));



		document.getElementById("retrieve").innerHTML = str;
	}
	else {
			document.getElementById("retrieve").innerHTML = "Unable to retrieve any data, your browser does not support web storage"
		}
}

function remove() {
	// //remove items one by one
	// localStorage.removeItem("email");
	// document.getElementById("remove1").innerHTML = "Email was removed from your localStorage";
	// var str = "Items remaining in local storage (in the manner they are stored): <br><br> ";
	// //display all items in localstorage
	// for (var i = 0; i < localStorage.length; i++){
	// 	str += "item: " + localStorage.getItem(localStorage.key(i)) + "<br>";
	// }
	// document.getElementById("displayItemsRemaining1").innerHTML = str;

	// localStorage.removeItem("fName")
	// document.getElementById("remove2").innerHTML = "fName was removed from your localStorage";
	// var str = "Items remaining in local storage (in the manner they are stored): <br><br> ";
	// //display all items in localstorage
	// for (var i = 0; i < localStorage.length; i++){
	// 	str += "item: " + localStorage.getItem(localStorage.key(i)) + "<br>";
	// }
	// document.getElementById("displayItemsRemaining2").innerHTML = str;
	//display all current data in Local storage
// 	console.log('line 173 <br>');
// 	for (var i = 0; i < localStorage.length; i++){
// 		str += "item: " + localStorage.getItem(localStorage.key(i)) + "<br>";
// 		console.log('line 176 <br>');
// 	}
// 	console.log('line 178 <br>');
// 	document.getElementById("displayItemsRemaining2").innerHTML = str;
// console.log('line 180 <br>');
// 	//clear all storage
// 	localStorage.clear();
// 	console.log('line 183 <br>');
// 	var str = "Items remaining in local storage (in the manner they are stored): <br><br> ";
// 	//display all items in localstorage
// 	for (var i = 0; i < localStorage.length; i++){
// 		str += "item: " + localStorage.getItem(localStorage.key(i)) + "<br>";
// 	}
// 	document.getElementById("clear").innerHTML = str;
} 
//

