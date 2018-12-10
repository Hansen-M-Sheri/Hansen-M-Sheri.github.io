//Event listeners assignments

//document.getElementById("first_name").addEventListener("change", validateFName());


// function validateForm() {
// 	if( updateAmount() == true &&  validateFName() == true && validateLName() == true &&
// 		validatePhone()  == true && validateAddress() == true && radioSet()  == true&&
// 		validateCC()  == true && validateExpiration() == true){
		
// 	}

// 	//expire valid
// }
function validateForm() {

	var msg1 = "All fields must be filled out to submit form";
	if (validateFName() == false){
		var element = document.getElementById("first_name");
		var msg = "Please enter your first name";
		validationError(msg1);
		inputErrorStyle(element, msg);
		return false
	}
	if (validateLName() == false){
		var element = document.getElementById("last_name");
		var msg = "Please enter your last name";
		validationError(msg1);
		inputErrorStyle(element, msg);
		return false
	}
	if (validatePhone() == false){
		var element = document.getElementById("phone");
		var msg = "Please enter your phone number";
		validationError(msg1);
		inputErrorStyle(element, msg);
		return false
	}
	if (validateAddress() == false){
		var element = document.getElementById("address");
		var msg = "Please enter your address";
		validationError(msg1);
		inputErrorStyle(element, msg);
		return false
	}
	if (validatePhone() == false){
		var element = document.getElementById("phone");
		var msg = "Please enter your phone number";
		validationError(msg1);
		inputErrorStyle(element, msg);
		return false
	}
	if (updateAmount() == false){
		var msg = "Please select an item to purchase";
		validationError(msg1);
		document.getElementById("item_0").focus();
			document.getElementById("item_0").style.outline = "none";
			document.getElementById("item_0").style.border = "1px solid red";
		
		return false
	}
	if (radioSet() == false){
		var msg = "Please select the credit card ";
		validationError(msg1);
		document.getElementById("card_0").focus();
		return false
	}
	if (validateCC() == false){
		var element = document.getElementById("credit_card");
		var msg = "Invalid Credit Card Number";
		validationError(msg1);
		inputErrorStyle(element, msg);
		return false
	}
	if (validateExpiration() == false){
		var element = document.getElementById("exp_date");
		var msg = "Invalid Credit Card Number";
		validationError(msg1);
		inputErrorStyle(element, msg);
		return false
	}
	//purchase succeeded - congrats!
	var msg = "Your purchase has been submitted. Thank you";
	document.getElementById("validate").innerHTML = msg;
	document.getElementById("errorWrapper").style.border = "2px solid green";
	//document.getElementById("errorWrapper")style.transition = "opacity, 5s";
	document.getElementById("errorWrapper").style.opacity = "1";



}
function radioSet() {
	var radio = document.getElementById("paymentWrapper").querySelectorAll(".radio");
	var i = 0;
	for (i = 0;i < 3; i++){
		if (radio[i].checked) {
			document.getElementById("errorWrapper").style.opacity = 0;
			return true;	
		}
	}
	var msg = "Please select the credit card ";
	validationError(msg);
	return false;
			
	
}

function validateCC() {
	var cc = document.getElementById("credit_card").value;
	var element = document.getElementById("credit_card");
	if (cc.length < 16 || cc.length > 16){
		var msg = "Invalid Credit Card Number - should be 16 digits";
		validationError(msg);
		inputErrorStyle(element, msg);
		return false;
	}
	else {
		var good = cc.search(/^[0-9]{16}/gm);
		if (good != 0) {
			cc.focus();
			var msg = "Invalid Credit Card Number";
			validationError(msg);
			inputErrorStyle(element, msg);
			return false;
		}
		else {
			inputStyleReset(element);
			return true;

		}
	}
}
function validateExpiration(){
	var expiration = document.getElementById("exp_date").value;
	var element = document.getElementById("exp_date");
	var arrayStrings = expiration.split("/");
	var month = arrayStrings[0];
	var year = arrayStrings[1];
	console.log(month);
	console.log(year);
	if (month < 1 || month > 12 || month.length <= 0){
		element.focus();
		var msg = "Invalid Credit Card Expiration Month";
		validationError(msg);
		inputErrorStyle(element, msg);
		return false;
	}
	if (year <= 2017 || year.length <= 0 ){
		element.focus();
		var msg = "Invalid Credit Card Expiration Year";
		validationError(msg);
		inputErrorStyle(element, msg);
		return false;
	}
	else {
		inputStyleReset(element);
		return true;
	}
}
function resetForm() {
	//clear all fields
	//set focus to first name text field
	setFormFocus();
	var elements = document.getElementById("myForm").querySelectorAll("input");
	
	
	inputStyleReset(elements[i]);
	//reset any placeholders
	document.getElementById("first_name").placeholder = " ";
	document.getElementById("last_name").placeholder = " ";
	document.getElementById("phone").placeholder = " ";
	document.getElementById("credit_card").placeholder = " ";
	document.getElementById("exp_date").placeholder = " ";
	alert("all reset");

}

function validatePhone() {
	var phone = document.getElementById("phone").value;
	var element = document.getElementById("phone");
	console.log(phone.lenth);
	if(phone.length <= 0){
		var msg = "Phone number is invalid :format ###-###-####";
		validationError(msg);
		inputErrorStyle(element, msg);
		return false;
	}
	else{
		var good = phone.search(/^\d{3}-\d{3}-\d{4}$/gm);
		if (good != 0) {

			element.focus();
			var msg = "Phone number is invalid";
			validationError(msg);
			inputErrorStyle(element, msg);
			return false;
		}
		else {
			inputStyleReset(element);
			return true;
		}
	}
}

function validateFName(){
	var fName = document.getElementById("first_name").value;
	var element = document.getElementById("first_name");
	console.log("fName.value = " + fName);
	if(fName <= 0){
		var msg = "Please enter your first name";
		validationError(msg);
		inputErrorStyle(element, msg);
		return false
	}
	else {
		inputStyleReset(element);
		return true;
	}
}
function validateLName(){
	var lName = document.getElementById("last_name").value;
	var element = document.getElementById("last_name");
	console.log("lName.value = " + lName);
	if(lName <= 0){
		var msg = "Please enter your last name";
		validationError(msg);
		inputErrorStyle(element, msg);
		return false
	}
	else{
		inputStyleReset(element);
		return true;
	}
}
function validateAddress(){
	var address = document.getElementById("address").value;
	var element = document.getElementById("address");
	console.log("address.value = " + address);
	if(address <= 0){
		var msg = "Please enter your address";
		validationError(msg);
		inputErrorStyle(element, msg);
		return false
	}
	else {
		inputStyleReset(element);
		return true;
	}
}
/*Writes an error msg in span & transitions to full opacity*/
function validationError(msg) {
	document.getElementById("validate").innerHTML = msg;
	document.getElementById("errorWrapper").style.opacity = "1";
	

}
/*Styles the input box red, puts in a placeholder*/
function inputErrorStyle(element, msg) {
	element.placeholder = msg;
	element.color = "red";
	//turn border around input box red
	element.style.outline = "none";
	element.style.border = "1px solid red";
}
function inputStyleReset(element) {

  element.style.outline= "none";
  element.style.padding = "3px 0px 3px 3px";
  element.style.margin = "5px 1px 3px 0px";
  element.style.border = "initial";
  document.getElementById("errorWrapper").style.opacity = 0;
  
}


/* Anytime checkbox is clicked update total amt*/
function updateAmount() {

	var checkboxes = document.getElementById("products").querySelectorAll(".checkbox");
	var totalAmt = parseInt(0);
	var i = 0;
	var value;
	for (i = 0;i < 4; i++){
		if (checkboxes[i].checked) {
			totalAmt += parseInt(checkboxes[i].value);
			document.getElementById("errorWrapper").style.opacity = 0;
			document.getElementById("item_0").style.border = "initial";
			value =  true;
		}	
	}
	if (totalAmt == 0) {
			var msg = "Please select an item to purchase before continuing";
			validationError(msg);
			document.getElementById("item_0").focus();
			document.getElementById("item_0").style.outline = "none";
			document.getElementById("item_0").style.border = "1px solid red";
			value = false;
		}
	document.getElementById("total").innerHTML = "$ " + totalAmt + ".00";
	return value;
}
/* On load of page, set focus to 1st checkbox*/
function setFormFocus() {
	document.getElementById("first_name").focus();
}
