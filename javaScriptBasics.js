
/*
 * Magic Answers: form array of possible answers
 * generate a random number and use it as the
 * index of the answerArray. 
*/
function magicAnswers() {
	var answers = [
		"Yes", 
		"No", 
		"Definitely!", 
		"Absolutely Not!", 
		"In your dreams", 
		"You wish!", 
		"It is certain", 
		"You may rely on it", 
		"Cannot predict now", 
		"Concentrate and ask again", 
		"Very doubtful",
		"Reply hazy", 
		"Don't count on it"
	];
	var max = answers.length - 1 ;
	//get random item from array
	var x = Math.floor((Math.random() * max));
	var randomString = answers[x]; 
    document.getElementById("demo").innerHTML = randomString;
    
}

function tryAgain(){
	document.getElementByID("anotherTry").style.visibility = "block";
	magicAnswers();
}