
//Object constructor with method attached
function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
	this.login = function() {
		this.online = true;
		console.log(this.email, 'has logged in');
	}
}

//Every time this constructor is used, it will have access to login function

var userOne = new User ('user1@email.com', 'Sheri');
var userTwo = new User ('user2@email.com', 'User2');

console.log(userOne);
