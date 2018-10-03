
var form = document.getElementById("form");
console.log(form);
//put UL in variable
var itemList = document.getElementById("items");

//form submit event
form.addEventListener('submit', addItem());

function addItem(e) { //pass in event object
	//e.preventDefault();
	//console.log(1);
	var newItem = document.getElementById("newItem").value;

	//create a new li element
	var li = document.createElement('li');

	//append the text from the form to the new list item
	li.appendChild(document.createTextNode(newItem));

	//create a delete button element
	var deleteButton = document.createElement('button');

	//add class to button
	deleteButton.className = 'deleteButton';

	//append text node
	deleteButton.appendChild(document.createTextNode('X'));

	//append button to li
	li.appendChild(deleteButton);

	itemList.appendChild(li);

}