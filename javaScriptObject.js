<!--hide script from old browsers

function myFunction(randomString) { 
    document.getElementById("demo").innerHTML = randomItem;
}

function magicAnswers() {
	var answers = ["Yes", "No", "Definitely!", "Absolutely Not!", "In your dreams"];
    document.getElementById("demo1").innerHTML = "test";
	//get random item from array
	var i = getRandomInt(0,4);
	var randomString = answers[i];
    document.getElementById("demo").innerHTML = randomString;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

//end hiding script from old browsers (is this really necessary?) --> 