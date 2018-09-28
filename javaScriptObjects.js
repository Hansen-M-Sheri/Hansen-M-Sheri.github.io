
//Object constructor with method attached
function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
	/*
	this.login = function() {
		this.online = true;
		console.log(this.email, 'has logged in');
	}
	*/
}

//Add a method to the prototype
User.prototype.login = function() {
	this.online = true;
		console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
	this.online = false;
	console.log(this.email, 'has logged out');
}

//Admin is a User - requires inheritance
function Admin(...args) { //this takes all parameters and puts then in an array
	//pass in the new Admin we created on line 36 by passing in "this"
  User.apply(this, args); //apply will run the function called, which in this case is User 
  							//(the 2nd param requires an array)

  //can add properties or methods ONLY accessible to admin here:
  this.role = 'super admin';
}

//But how do we inherit the prototype items from User? Because admin will have it's own prototype
Admin.prototype = Object.create(User.prototype);

//Every time this constructor is used, it will have access to login function

var userOne = new User ('user1@email.com', 'Sheri');
var userTwo = new User ('user2@email.com', 'User2');
var admin = new Admin ('admin@email', 'Jacob');

console.log(admin);


