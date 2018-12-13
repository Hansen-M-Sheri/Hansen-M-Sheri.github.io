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
			populateWeatherConditions();

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

	displayBackgroundImage(id);
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
	document.getElementById("tableSunrise").innerHTML = formatTimeFromEpoch(jObj.sys.sunrise);
	document.getElementById("tableSunset").innerHTML = formatTimeFromEpoch(jObj.sys.sunset);
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
	var id;

/* 5 day forecast returns items every three hours (8 per day)
find every 8th value and use it for the day.
@note: I would prefer to use the API 16 day daily forecast, but it cost
money to use
*/
	for(var i = 0; i < length; i += 8){
		//get variables
		timestamp = jObj.list[i].dt;
		temp = convertToFahrenheit(jObj.list[i].main.temp);
		id = jObj.list[i].weather.id;
		
		//display date as day of week
		var myDate = new Date(timestamp * 1000);
		var day = getDayOfWeek(myDate.getDay());
		//populate  card
		var int = i / 8; //only pull one per day
		if(int <= 6 && int > 0){ //only populate 5 days
		var dateId = "dateDay"+ int ;
		console.log(dateId);
		document.getElementById(dateId).innerHTML = day;
		//populate weatherIcon
		var str = "iconDay" + int; 
		console.log("str:"+ str + "id: "+ id);
		selectWeatherAnimation(id, str);
		var tempDay = "tempDay" + int;
		document.getElementById(tempDay).innerHTML = Math.round(temp) + "&#176";
		}
	}
}
function getDayOfWeek(day){
	if(day == 0){
		return "Sunday";
	}
	else if(day == 1){
		return "Monday";
	}
	else if(day == 2){
		return "Tuesday";
	}
	else if(day == 3){
		return "Wednesday";
	}
	else if(day == 4){
		return "Thursday";
	}
	else if(day == 5){
		return "Friday";
	}
	else if(day == 6){
		return "Saturday";
	}
}
/**
* SELECT WEATHER ANIMATION
*	Pick the weather icon based on weather id
*/
function selectWeatherAnimation(weatherID, str){
	if(weatherID >= 200 && weatherID < 300){ //Thunderstorms
		console.log("thunder created");
		createThunder(str);
	}
	else if(weatherID >= 300 && weatherID < 600){ //rain
		console.log("rain created");
		createRainCloud(str);
	}
	else if (weatherID >= 600 && weatherID < 700){ //snow
		console.log("snow created");
		createSnowHTML(str);
	}
	else if (weatherID >= 700 && weatherID < 800){ //fog
		console.log("fog created");
		createWindHTML(str);
	}
	else if (weatherID == 800){ //clear sky
		console.log("clearSky created");
		createSunHTML(str);
	}
	else { //clouds
		console.log("clouds created");
		createCloudyHTML(str);
		
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
function formatTimeFromEpoch(timestamp){
	var date = new Date(timestamp * 1000);
	var hours = date.getHours();
  	var minutes = date.getMinutes();
     var ampm = hours >= 12 ? 'pm' : 'am';
  	hours = hours % 12;
  	hours = hours ? hours : 12; // the hour '0' should be '12'
  	minutes = minutes < 10 ? '0'+minutes : minutes;
  	var strTime = hours + ':' + minutes + ' ' + ampm;
  	document.getElementById("timeAndDate").innerHTML =  strTime;
}
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
* Format time for seconds
*/
function formatSeconds(seconds)
{
    var date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

/** 
* DISPLAY BACKGROUND IMAGE
*   Based on ID from API for daily weather
*   Select appropriate weather picture to display
*/
function displayBackgroundImage(id){
	if(id >= 200 && id < 300){ //Thunderstorms
		document.getElementById("bg").style.backgroundImage = "url('weatherBackgroundImages/dark-lightning-night-56614.jpg')";
	}
	else if(id >= 300 && id < 600){ //rain
		document.getElementById("bg").style.backgroundImage = "url('weatherBackgroundImages/blur-cars-dew-125510.jpg')";
	}
	else if (id >= 600 && id < 700){ //snow
		document.getElementById("bg").style.backgroundImage = "url('weatherBackgroundImages/blizzard-cold-exploration-326152.jpg')";
	}
	else if (id >= 700 && id < 800){ //fog
		document.getElementById("bg").style.backgroundImage = "url('weatherBackgroundImages/foggy.jpg')";
	}
	else if (id == 800){ //clear sky
		document.getElementById("bg").style.backgroundImage = "url('weatherBackgroundImages/alpine-clouds-daylight-462149.jpg')";
	}
	else { //clouds
		document.getElementById("bg").style.backgroundImage = "url('weatherBackgroundImages/atmosphere-bright-cloud-724864.jpg')";
		
	}
}

/**
* CREATE WIND HTML
*  Create and insert the HTML elements
*  for the wind icon
*/
function createWindHTML(str){
	// var str = "iconDay" + int;
	var icon = document.createElement("i");
     icon.className = "fas fa-wind fa-2x";
     var windDiv = document.createElement("div");
     windDiv.appendChild(icon);
     var divContainer = document.getElementById(str);
     divContainer.appendChild(windDiv);
}

/**
* CREATE SNOW HTML
*   Create and insert the HTML elements 
*    for the snowing icon
*/
function createSnowHTML(str){
	// var int = 1;
	// var str = "iconDay" + int;
	/***** Create snowflakes *****/
	//SNOWFLAKE 1  
	var snowIcon = document.createElement("i");
	snowIcon.className ="fas fa-snowflake";
	//create span for "drop2" snow 
	var snowflake = document.createElement("span");
	snowflake.className = "snow";
	snowflake.id = "drop2";
	//append icon to snowflake
	snowflake.appendChild(snowIcon);
	//SNOWFLAKE 2  
	var snowIcon2 = document.createElement("i");
	snowIcon2.className ="fas fa-snowflake";
	//create span for "drop2" snow 
	var snowflake2 = document.createElement("span");
	snowflake2.className = "snow";
	snowflake2.id = "drop3";
	//append icon to snowflake
	snowflake2.appendChild(snowIcon2);
	//SNOWFLAKE 3 
	var snowIcon3 = document.createElement("i");
	snowIcon3.className ="fas fa-snowflake";
	//create span for "drop2" snow 
	var snowflake3 = document.createElement("span");
	snowflake3.className = "snow";
	snowflake3.id = "drop4";
	//append icon to snowflake
	snowflake3.appendChild(snowIcon3);
	//SNOWFLAKE 4 
	var snowIcon4 = document.createElement("i");
	snowIcon4.className ="fas fa-snowflake";
	//create span for "drop2" snow 
	var snowflake4 = document.createElement("span");
	snowflake4.className = "snow";
	snowflake4.id = "drop5";
	//append icon to snowflake
	snowflake4.appendChild(snowIcon4);

	//CREATE CLOUD
	var cloudIcon = document.createElement("i");
	cloudIcon.className = "fas fa-cloud fa-3x";
	var snowCloud = document.createElement("div");
	snowCloud.className = "snowCloud1";
	snowCloud.appendChild(cloudIcon);
	snowCloud.appendChild(snowflake);
	snowCloud.appendChild(snowflake2);
	snowCloud.appendChild(snowflake3);
	snowCloud.appendChild(snowflake4);
	//append to main div
	var divContainer = document.getElementById(str);
	divContainer.appendChild(snowCloud);
}
/**
*   CREATE RAIN CLOUD
*   Create and insert the HTML elements 
*    for the rain icon
*/
function createRainCloud(str){
	// var int = 1;
	// var str = "iconDay" + int;
	/***** Create raindrops *****/
	//RAINDROP 1  
	var rainIcon = document.createElement("i");
	rainIcon.className ="fas fa-raindrops";
	var rainIconTint = document.createElement("i");
	rainIconTint.className = "fas fa-tint";
	//create span for "drop2" snow 
	var raindrop = document.createElement("span");
	raindrop.className = "rain";
	raindrop.id = "drop2";
	//append icon 
	raindrop.appendChild(rainIcon);
	raindrop.appendChild(rainIconTint);
	//RAINDROP 2 
	var rainIcon2 = document.createElement("i");
	rainIcon2.className ="fas fa-raindrops";
	var rainIconTint2 = document.createElement("i");
	rainIconTint2.className = "fas fa-tint";
	//create span 
	var raindrop2 = document.createElement("span");
	raindrop2.className = "rain";
	raindrop2.id = "drop3";
	//append icon 
	raindrop2.appendChild(rainIcon2);
	raindrop2.appendChild(rainIconTint2);
	//RAINDROP 3 
	var rainIcon3 = document.createElement("i");
	rainIcon3.className ="fas fa-raindrops";
	var rainIconTint3 = document.createElement("i");
	rainIconTint3.className = "fas fa-tint";
	//create span 
	var raindrop3 = document.createElement("span");
	raindrop3.className = "rain";
	raindrop3.id = "drop4";
	//append icon
	raindrop3.appendChild(rainIcon3);
	raindrop3.appendChild(rainIconTint3);
	//RAINDROP 4  
	var rainIcon4 = document.createElement("i");
	rainIcon4.className ="fas fa-raindrops";
	var rainIconTint4 = document.createElement("i");
	rainIconTint4.className = "fas fa-tint";
	//create span   
	var raindrop4 = document.createElement("span");
	raindrop4.className = "rain";
	raindrop4.id = "drop5";
	//append icon 
	raindrop4.appendChild(rainIcon4);
	raindrop4.appendChild(rainIconTint4);


	//CREATE CLOUD
	var cloudIcon = document.createElement("i");
	     cloudIcon.className = "fas fa-cloud fa-3x";
	     var rainCloud = document.createElement("div");
	     rainCloud.className = "rainCloud1";
	    rainCloud.appendChild(cloudIcon);
	     rainCloud.appendChild(rainIcon);
	// rainCloud.appendChild(raindrop);
	rainCloud.appendChild(raindrop2);
	rainCloud.appendChild(raindrop3);
	rainCloud.appendChild(raindrop4);

	var divContainer = document.getElementById(str);
	divContainer.appendChild(rainCloud);

}
/**
*   CREATE THUNDER
*   Create and insert the HTML elements 
*    for the lightening icon
*/
function createThunder(str){
	//var int = 1;
// var str = "iconDay" + int;
/***** Create raindrops *****/
//lightening 1  
var icon1 = document.createElement("i");
icon1.className ="fas fa-bolt fa-2x";
//create span 
var lightening1 = document.createElement("span");
lightening1.className = "lightening";
lightening1.id = "bolt";
//append icon 
lightening1.appendChild(icon1);

//lightening 2  
var icon2 = document.createElement("i");
icon2.className ="fas fa-bolt fa-2x";
//create span 
var lightening2 = document.createElement("span");
lightening2.className = "lightening";
lightening2.id = "bolt2";
//append icon 
lightening2.appendChild(icon2);

//CREATE CLOUD
var cloudIcon = document.createElement("i");
     cloudIcon.className = "fas fa-cloud fa-3x";
     var lighteningCloud = document.createElement("div");
     lighteningCloud.className = "lighteningCloud1";
    lighteningCloud.appendChild(cloudIcon);
    
// rainCloud.appendChild(raindrop);
lighteningCloud.appendChild(lightening1);
lighteningCloud.appendChild(lightening2);


var divContainer = document.getElementById(str);
divContainer.appendChild(lighteningCloud);
}

/**
*   CREATE SUN
*   Create and insert the HTML elements 
*    for the sun icon
*/
function createSunHTML(str){
	// var int = 1;
	// var str = "iconDay" + int;
	/***** Create sun *****/
	var sunIcon = document.createElement("i");
	sunIcon.className = "fas fa-sun fa-3x";
	sunIcon.id ="sun";
	var sun = document.createElement("div");
	sun.className = "sun";
	sun.appendChild(sunIcon);
	var divContainer = document.getElementById(str);
	divContainer.appendChild(sun);
}

/**
*   CREATE CLOUDY HTML
*   Create and insert the HTML elements 
*    for the clouds icon
*/
function createCloudyHTML(str){
// 	var int = 1;
// var str = "iconDay" + int;
/***** Create cloudy *****/
var cloudIcon = document.createElement("i");
cloudIcon.className = "fas fa-cloud fa-3x";
var cloud1 = document.createElement("div");
 cloud1.className = "cloud1";
 cloud1.appendChild(cloudIcon);
/******* 2nd cloud *******/
var cloudIcon2 = document.createElement("i");
cloudIcon2.className = "fas fa-cloud fa-3x";
var cloud2 = document.createElement("div");
 cloud2.className = "cloud2";
 cloud2.appendChild(cloudIcon2);

var divContainer = document.getElementById(str);
divContainer.appendChild(cloud1);
divContainer.appendChild(cloud2);


}