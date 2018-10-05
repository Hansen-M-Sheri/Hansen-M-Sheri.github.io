
//Object constructor with method attached
function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
	
	
	
}

//Add a method to the prototype
User.prototype.login = function() {
	this.online = true;
}

User.prototype.logout = function() {
	this.online = false;
}

//Admin is a User - requires inheritance
function Admin(...args) { //this takes all parameters and puts then in an array
	console.log(args);
	//pass in the new Admin we created on line 36 by passing in "this"
  User.apply(this, args); //apply will run the function called, which in this case is User 
  							//(the 2nd param requires an array)

  //can add properties or methods ONLY accessible to admin here:
  this.role = 'super admin';
}

//But how do we inherit the prototype items from User? Because admin will have it's own prototype
Admin.prototype = Object.create(User.prototype);

//Every time this constructor is used, it will have access to login function


var userTwo = new User ('user2@email.com', 'Jacob');
var admin = new Admin ('admin@email', 'Jacob');

console.log(admin);

function demoObjectCreation() {
	var userOne = new User ('user1@email.com', 'Sheri');
	var str = " ";
	str += "User: <br>" + "name: " + userOne.name + "<br>" + "email: " + userOne.email +"<br>" + "Logged in: " + userOne.online ;
	document.getElementById("object").innerHTML = str;	
}

function appendFunctionLogin() {
	var userOne = new User ('user1@email.com', 'Sheri');
	userOne.login();
		var str = " ";
		str += "User " + userOne.name + "is logged in";
		document.getElementById("login").innerHTML = str;
}
function appendFunctionLogout() {
	var userOne = new User ('user1@email.com', 'Sheri');
	userOne.logout();
		var str = " ";
		str += "User " + userOne.name + "is logged out";
		document.getElementById("logout").innerHTML = str;
}


