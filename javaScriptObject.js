<!--hide script from old browsers

function myFunction(randomString) { 
    document.getElementById("demo").innerHTML = randomItem;
}

function magicAnswers() {
	var answers = ["Yes", "No", "Definitely!", "Absolutely Not!", "In your dreams", "You wish!", 
	"It is certain", "You may rely on it", "Cannot predict now", "Concentrate and ask again", "Very doubtful",
	"Reply hazy, try again", "Don't count on it"];
	//get random item from array
	var randomString = answers[getRandomInt(0,answers.length())];
    document.getElementById("demo").innerHTML = randomString;
    // document.getElementByID("anotherTry").style.visibility = "block";
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

//end hiding script from old browsers (is this really necessary?) --> 