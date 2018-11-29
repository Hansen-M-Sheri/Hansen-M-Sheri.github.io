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
			var jObj = JSON.parse(this.responseText);
			populateWeatherConditions(jObj);

		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send()
}
window.onload = callWeatherApi("Boise", "us");

function populateWeatherConditions(jObj){
	//loop thru weather id to determine background image
	var length = jObj.weather.length;
	var id = 0;
	console.log(id);
	if(length <= 1) {
		id = jObj.weather[0];
	}
	for(var i = 0; i < length; i++){
		//keep the lowest id in the array & use for background
		if(i == 0){
			id = jObj.weather[0];
		}
		else {
			if(id > jObj.weather[i]){
				id = jObj.weather[i];
			}
		}
	}
	console.log(id);
	
	//store weather condition id's and current location in local storage
	//grab associated background image and display it (with backup image color)
	//display temp
	//display city, and time

}
