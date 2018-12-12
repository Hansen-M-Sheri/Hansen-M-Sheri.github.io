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
	var zipCode = localStorage.getItem("userZip");
	if( zipCode == null){ 
		localStorage.setItem("userZip", zip);
	}
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



/* Populate Weather Conditions
 *  set and store condition ID to determine
 *  background image
 */
function populateWeatherConditions(){ 
	//loop thru weather id to determine background image
	var jObj = JSON.parse(localStorage.getItem("weatherObject"));
	console.log(jObj);
	var length = jObj.weather.length;
	var id = 0;
	console.log(id);
	if(length <= 1) {
		id = jObj.weather[0];
	}
	for(var i = 0; i < length; i++){
		//keep the lowest id in the array & use for background
		if(i == 0){
			id = jObj.weather[0].id;
		}
		else {
			if(id > jObj.weather[i].id){
				id = jObj.weather[i].id;
			}
		}
	}
	var temp = jObj.main.temp;
	var fTemp = convertToFahrenheit(temp);
	
	//grab associated background image and display it (with backup image color)
	//display temp
	document.getElementById("currentTemp").innerHTML = Math.round(fTemp) + "&#176";
	//display city, and time
	document.getElementById("location").innerHTML = jObj.name;
	formatTime();


	//populate back of card info
	var temp_min = convertToFahrenheit(jObj.main.temp_min);
	var temp_max = convertToFahrenheit(jObj.main.temp_max);
	document.getElementById("backCardCity").innerHTML = jObj.name;
	document.getElementById("description").innerHTML = jObj.weather[0].description;
	document.getElementById("tableTemp").innerHTML = Math.round(fTemp) + "&#176";
	console.log(jObj.main);
	console.log(jObj.main.humidity);
	document.getElementById("tableHumidity").innerHTML = jObj.main.humidity;
	document.getElementById("tableMinTemp").innerHTML = Math.round(temp_min) + "&#176";
	document.getElementById("tableMaxTemp").innerHTML = Math.round(temp_max) + "&#176";
	document.getElementById("tablePress").innerHTML = jObj.main.pressure;
	document.getElementById("tableWind").innerHTML = jObj.wind.speed + " mph";
	document.getElementById("tableSunrise").innerHTML = formatSeconds(jObj.sys.sunrise);
	document.getElementById("tableSunset").innerHTML = formatSeconds(jObj.sys.sunset);
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
/**
* Format Time for am/pm
*/
function formatTime() {
    var date = new Date();
    var hours = date.getHours();
  	var minutes = date.getMinutes();
     var ampm = hours >= 12 ? 'pm' : 'am';
  	hours = hours % 12;
  	hours = hours ? hours : 12; // the hour '0' should be '12'
  	minutes = minutes < 10 ? '0'+minutes : minutes;
  	var strTime = hours + ':' + minutes + ' ' + ampm;
  	document.getElementById("timeAndDate").innerHTML =  strTime;
    
}

/**
* Convert from kelvin to fahrenheit
*/
function convertToFahrenheit(temp){
	var f = 1.8 * (temp - 273) + 32;
	return f;
}

/**
* Format time for seconds
*/
function formatSeconds(seconds)
{
    var date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}