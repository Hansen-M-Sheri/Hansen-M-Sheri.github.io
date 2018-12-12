/* Determine what screen to start on. Does zip exist?*/
window.onload = checkNewUser();

function checkNewUser(){
	var zip = localStorage.getItem("userZip");
	console.log(zip);
	if( zip == null){ //new visitor
		console.log("zip not in localStorage");
		//no zip - display welcome
		document.getElementById("main").style.display = "none";
		document.getElementById("welcome").style.display = "block";
	}
	else{ //load ajax request
		document.getElementById("welcome").style.display = "none";
		document.getElementById("main").style.display = "block";
		loadWeatherAjax(localStorage.getItem("userZip"), "us");
	}
	

} 
/**
* Load Weather Ajax
*   call the methods to grab weather
*/
function loadWeatherAjax(zip){
	
	callWeatherApi(zip, "us");
	callFiveDayApi(zip, "us");
}

/*
* Call Weather API
* use ajax to get the weather for the current zip code
*/
function callWeatherApi(zip, country) {
	console.log("callWeatherApi called");
	var xmlhttp = new XMLHttpRequest();
	var api_key = "94c477428543f4d7a37d952a58632aab";
	var appID = "&APPID=" + api_key;
	var url = "https://api.openweathermap.org/data/2.5/weather?zip=";
	url += zip + "," + country + appID;
	console.log(url);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 &&  this.status == 200) {
			localStorage.setItem("weatherObject", this.responseText);
			console.log("weatherObject set in storage & is " + this.responseText);
			//populateWeatherConditions();

		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	console.log("callWeatherApi finished");
}
/**
* Get 5 day forecast
*/
function callFiveDayApi(zip, country){
	//get the 5 day forecast
	var xmlhttp = new XMLHttpRequest();
	var api_key = "94c477428543f4d7a37d952a58632aab";
	var appID = "&APPID=" + api_key;
	var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?zip=";
	forecastUrl += zip + "," + country + appID;
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			localStorage.setItem("5dayWeatherObj", this.responseText);
			populateFiveDay();
		}
	};
	xmlhttp.open("GET", forecastUrl, true);
	xmlhttp.send();
}
