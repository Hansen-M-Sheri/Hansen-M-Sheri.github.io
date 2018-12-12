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
		loadWeatherAjax(localStorage.getItem("userZip"), "us");
	}
	

} 
/**
* Load Weather Ajax
*   call the methods to grab weather
*   hide welcome screen and display main
*/
function loadWeatherAjax(zip){
	document.getElementById("welcome").style.display = "none";
		document.getElementById("main").style.display = "block";
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

/**
* Populate the values for the 5 day forecast
*/
function populateFiveDay(){
	var jObj = JSON.parse(localStorage.getItem("5dayWeatherObj"));
	//array of list
	var length = jObj.list.length;
	//object with dt = date, main.temp, etc
	var date;
	var temp;
	var temp_min;
	var temp_max;
	var pressure;
	var humidity;
	var id;
	var wind;

	for(var i = 0; i < length ; i++){
		//get variables
		date = jObj.list[i].dt_txt;
		temp = convertToFahrenheit(jObj.list[i].main.temp);
		temp_min = convertToFahrenheit(jObj.list[i].main.temp_min);
		temp_max = convertToFahrenheit(jObj.list[i].main.temp_max);
		pressure = jObj.list[i].main.pressure;
		humidity = jObj.list[i].main.humidity;
		id = jObj.list[i].weather.id;
		
		//populate front of card

		var int = i + 1;
		if(int <= 5){
		var dateId = "dateDay"+ int ;
		console.log(dateId);
		document.getElementById(dateId).innerHTML = date;
		var iconDay = "iconDay"+ int;
		document.getElementById(iconDay).innerHTML = id;
		var tempDay = "tempDay" + int;
		//populate back of card
		document.getElementById(tempDay).innerHTML = Math.round(temp) + "&#176";
		var backTempDay = "backTempDay" + int;
		//document.getElementById(backTempDay).innerHTML = Math.round(temp) + "&#176";
		var humidityDay = "humidityDay" + int;
		document.getElementById(humidityDay).innerHTML = humidity;
		var minTempDay = "minTempDay" + int;
		document.getElementById(minTempDay).innerHTML = Math.round(temp_min) + "&#176";
		var maxTempDay = "maxTempDay" + int;
		document.getElementById(maxTempDay).innerHTML = Math.round(temp_max) + "&#176";
		}
	}
}