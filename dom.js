
var form = document.getElementById('form');
//put UL in variable
var itemList = document.getElementById("items");

//form submit event
form.addEventListener('submit', addItem());

function addItem(e) { //pass in event object
	e.preventDefault();
	console.log(1);
	

}