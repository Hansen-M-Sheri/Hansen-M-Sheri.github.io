function computeMonthlyPayment(apr, loanTerm, loanAmt) {
	//calculate monthly payment
	//M = P[mpr(1 + mpr)^term]/[(1+mpr)^term - 1]
	//M = monthly payment, P = principal amt, mpr = Monthly interest rate n= number of payments
	loanTerm *= 12;
	var mpr = (apr / 100)/12;
	var calcMPROverTerm = Math.pow()
	//calc monthly apr
	var variable = Math.pow(1 + mpr, term);

	var monthlyPayment = loanAmt * (mpr * Math.pow(1 + mpr, loanTerm) / (Math.pow(1 + mpr, loanTerm) - 1));
	//convert monthly payment to a fixed decimal
	monthlyPayment = monthlyPayment.toFixed(2);
	document.getElementById("payment").innerHTML = "$" + monthlyPayment;
}
/*Validate all required fields exist then calculate payment*/
function processInput() {
	var apr = (document.getElementById("apr").value);
	var loanTerm = document.getElementById("term").value;
	var loanAmt = document.getElementById("amt").value;
	var allValid = true;
	console.log("apr = " + apr.length);
	console.log("loanTerm = " + loanTerm.length);
	console.log("loanAmt = " + loanAmt);
	allValid = validateRequiredFields(apr, loanTerm, loanAmt);
	console.log("allValid = " + allValid);
	if(allValid) {
		computeMonthlyPayment(apr, loanTerm, loanAmt, allValid);
	}
	else {
		console.log("invalid input");
		document.getElementById("payment").innerHTML = " ";
	}
}
/* Validate all required fields have value*/
function validateRequiredFields(apr, loanTerm, loanAmt, allValid) {
	console.log("validate has been called");
	allValid = true;
	if (apr.length <= 0){
		document.getElementsByClassName("apr")[0].style.visibility = "visible";
		//getting an error setting .focus on a null value - this is the fix
		document.getElementById("apr").innerHTML = " ";
		document.getElementById("apr").focus();
		allValid = false;
		console.log("testApr");
		console.log(apr);
	}
	if (loanTerm.length <= 0){
		document.getElementsByClassName("term")[0].style.visibility = "visible";
		//getting an error setting .focus on a null value - this is the fix
		document.getElementById("term").innerHTML = " ";
		document.getElementById("term").focus();
		allValid =  false;
		console.log("testTerm");
		console.log(loanTerm);
	}
	if(loanAmt.length <= 0) {
		document.getElementsByClassName("amount")[0].style.visibility = "visible";
		//getting an error setting .focus on a null value - this is the fix
		document.getElementById("amount").innerHTML = " ";
		document.getElementById("amount").focus();
		allValid =  false;
		console.log("Testamount");
		console.log(loanAmt);
	}

	return allValid;
}
// 	return allValid;
// }
/* APR must be between 0 & 25% */
function validateApr(apr) {
	if (apr >= 0 && apr <= 25 || apr.length == 0) {
		document.getElementsByClassName("apr")[0].style.visibility = "hidden";
	}
	else {
		//show the error message
		document.getElementsByClassName("apr")[0].style.visibility = "visible";
	}
}

/* Loan must be between 0 & 40 */
function validateTerm(loanTerm) {
	console.log("validate term was called");
	if (loanTerm > 0 && loanTerm <= 40 || loanTerm == null){
			document.getElementsByClassName("term")[0].style.visibility = "hidden";
	}
	else {
		//show the error message
		document.getElementsByClassName("term")[0].style.visibility = "visible";
	}

}

function validateAmt(loanAmt) {
	console.log("validate amt was called");
	if (loanAmt > 0  || loanAmt == null){
			document.getElementsByClassName("amount")[0].style.visibility = "hidden";
	}
	else {
		//show the error message
		document.getElementsByClassName("amount")[0].style.visibility = "visible";
	}
}

function resetAll() {
	//clear the payment 
	document.getElementById("payment").innerHTML = " ";
	document.getElementById("apr").focus();
	document.getElementsByClassName("apr")[0].style.visibility = "hidden";
	document.getElementsByClassName("term")[0].style.visibility = "hidden";
	document.getElementsByClassName("amount")[0].style.visibility = "hidden";
}