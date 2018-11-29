//Weather object constructor
//  Weather() {
// 	this.
// }


/*
* Call Weather API
* use ajax to get the weather for the current zip code
*/
function callWeatherApi() {
	var xmlhttp = new XMLHttpRequest();
	var city = "Boise,id&";
	var api_key = "94c477428543f4d7a37d952a58632aab";
	var appID = "APPID=" + api_key;
	var url = "https://api.openweathermap.org/data/2.5/weather?";
	url += city + appID;
	console.log(url);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 &&  this.status == 200) {
			var jObj = JSON.parse(this.responseText);
			console.log(jObj);
			console.log("testAjax");

		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send()
}
window.onload = callWeatherApi();

