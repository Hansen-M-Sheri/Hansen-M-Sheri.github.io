
function createListItems() {
		var form = document.getElementById("form");
		//put UL in variable
		var itemList = document.getElementById("items");

		//delete event
		itemList.addEventListener('click', removeItem);
	    //form submit event
		form.addEventListener('submit', addItem());
	}

	function addItem(e) { //pass in event object
	var itemList = document.getElementById("items");
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
	


	function removeItem(e) {
		//only continue if the target clicked on is in class //deleteButton
		if(e.target.classList.contains('deleteButton')) {
			if(confirm('Are you sure?')) {
				//get the parentElement (li)
				var li = e.target.parentElement;
				//remove the ul from itemlist
				var itemList = document.getElementById("items");
				itemList.removeChild(li);

			}
		}
	}
