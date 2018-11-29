//Weather object constructor
//  Weather() {
// 	this.
// }


/*
* Call Weather API
* use ajax to get the weather for the current zip code
*/
function callWeatherApi() {
	var apiCall = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=94c477428543f4d7a37d952a58632aab";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 &&  this.status == 200) {
			var jObj = JSON.parse(this.responseText);
			console.log(jObj);
		}
	};
	xhttp.open("GET", apiCall, true);
	xmlhttp.send()
}
window.onload = callWeatherApi();

