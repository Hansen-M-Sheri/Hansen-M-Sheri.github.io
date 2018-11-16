
function generateColor() {
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return hue;
}

/* Pull data for selected country from file*/
function getData(country) {
	console.log(country);
	var color = generateColor;
	var filename = "";
	switch(country) {
		case "russia":
			filename = "russia.txt";
			document.getElementById("russia").style.background= color;
			break;
		case "mexico":
			filename = "mexico.txt";
			document.getElementById("mexico").style.background= color;
			break;
		case "canada":
			filename = "canada.txt";
			document.getElementById("canada").style.background= color;
			break;
		case "usa":
			filename = "usa.txt";
			document.getElementById("usa").style.background= color;
			break;

	}
	console.log(filename);
	loadDoc(filename);
	
}

function generateColor() {
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return hue;
}

function loadDoc(filename) {
	
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	if (filename == "json.txt" || filename == "json1.txt"){
    		displayJson(this.responseText);
    	}
    	else {
    		adjustStylesCountry();
    		document.getElementById("population").innerHTML = this.responseText;
    		
    	}    	
    }
  };
  xhttp.open("GET", filename, true);
  xhttp.send();
}

function display(response){
	var cells = document.getElementsByTagName('td');
	var res = response.split(/\n/);
	for (var i = 0; i < res.length ; i++) {
		
		cells[i].innerHTML = res[i];
	}
	
}

function getJson() {
	var filename = document.getElementById("textArea").value;
	//check for valid filename
	if (filename == "json.txt" || filename == "json1.txt") {	
		loadDoc(filename);
	}
	else {
		adjustStylesJson();
		document.getElementById("studentDetails").innerHTML = "The file you selected does not exist. Please enter another file."
	}

}
function displayJson(response){

	//parse the json
	var studentDetails = JSON.parse(response);

	//loop thru and get all students
	var responseString = "";
	var i= 0;
	var j = 0;
	for (i in studentDetails){
	
		for(j in studentDetails[i]){
			console.log(studentDetails[i][j].first);
		responseString +=
			studentDetails[i][j].first + " "+ studentDetails[i][j].last + "\n" +
			studentDetails[i][j].major + " " + studentDetails[i][j].gpa + "\n";
			var addresses = studentDetails[i][j].address;
			responseString += addresses.city + ", " + addresses.state +"\n"+
								addresses.zip + "\n\n";
		}
			
	}
	adjustStylesJson();
	document.getElementById("studentDetails").innerHTML = responseString;
} 

function adjustStylesCountry() {
	console.log("changing grid column");
	document.getElementById("heading1").style.gridColumn = "4/8";
	document.getElementById("subheading").style.gridColumn = "4/8";
	document.getElementById("buttons").style.flexDirection = "row";

	document.getElementById("buttons").style.gridColumn = "4/8";
	document.getElementById("countryResponse").style.display = "block";
	document.getElementById("buttons").style.flexDirection = "row";
}
function adjustStylesJson() {
	document.getElementById("heading2").style.gridColumn = "1/5";
	document.getElementById("json").style.gridColumn = "2/4";
	
	document.getElementById("students").style.display = "block";
}