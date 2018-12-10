function Weather(id, image){
	this.id = id;
	this.image = image;
}

/*
* Call Weather API
* use ajax to get the weather for the current zip code
*/
function callWeatherApi(city, country) {
	var xmlhttp = new XMLHttpRequest();
	var api_key = "94c477428543f4d7a37d952a58632aab";
	var appID = "&APPID=" + api_key;
	var url = "https://api.openweathermap.org/data/2.5/weather?q=";
	url += city + "," + country + appID;
	console.log(url);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 &&  this.status == 200) {
			localStorage.setItem("weatherObject", this.responseText);
			populateWeatherConditions();

		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	//get the 5 day forecast
	// var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
	// forecastUrl += city + "," + country + appID;
	// xmlhttp.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		localStorage.setItem("5dayWeatherObj", this.responseText);

	// 	}
	// };
	// xmlhttp.open("GET", forecastUrl, true);
	// xmlhttp.send();
}
window.onload = callWeatherApi("Boise", "us");

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
	console.log(id);
	console.log(jObj.weather);
	var temp = jObj.main.temp;
	var fTemp = convertToFahrenheit(temp);
	
	//grab associated background image and display it (with backup image color)
	//display temp
	document.getElementById("currentTemp").innerHTML = Math.round(fTemp) + "&#176";
	//display city, and time
	document.getElementById("location").innerHTML = jObj.name;
	formatTime();

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

function convertToFahrenheit(temp){
	var f = 1.8 * (temp - 273) + 32;
	return f;
}
