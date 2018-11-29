//Weather object constructor
//  Weather() {
// 	this.
// }


/*
* Call Weather API
* use ajax to get the weather for the current zip code
*/
function callWeatherApi() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 &&  this.status == 200) {
			var jObj = JSON.parse(this.responseText);
			console.log(jObj);
		}
	};
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Boise,id&APPID=524901&APPID=94c477428543f4d7a37d952a58632aab
)", true);
	xmlhttp.send()
}
window.onload = callWeatherApi();

