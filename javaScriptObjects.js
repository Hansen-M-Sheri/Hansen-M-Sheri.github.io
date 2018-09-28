//create an object
var o = {
	age: 7,
	getAgeInTen() {
		return this.a + 10;
	},
	set age(x) { this.a = x};
	displayO();
}

function Car(make, model, year, owner) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.owner = owner;
	this.displayCar = displayCar;
}

function displayCar() {
	var result = "A Beautiful " + this.year + ' ' + this.make 
	   + ' ' + this.model;
	   pretty_print(result);
}

function pretty_print(string) {
	document.getElementById("demo").innerHTML = string;
}

var person = {
	name: "Sheri",
	eyeColor: "Blue",
	age: 27, 
	updateAge: function() {
		return ++person.Age;
	}
}

//Objects are capitalized
function Person(name, eyeColor, age) {
	this.name = name;
	this.eyeColor = eyeColor;
	this.age = 
}