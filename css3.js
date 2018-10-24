function castSpell(spellName) {
	//transform wand 2 times to left and then 4 times to right to simulate shaking
	alert("spellName = " + spellName);
	//var wand = document.getElementById("wand");
	var wand = document.getElementById("wand");
	console.log("onclick worked");

	wand.style.transform = "rotate(-10deg)";
	console.log("first transform complete");
	// wand.style.transform = "rotate(-10deg)";
	// wand.style.transform = "rotate(10deg)";
	// wand.style.transform = "rotate(10deg)";
	// wand.style.transform = "rotate(10deg)";
	// wand.style.transform = "rotate(10deg)";
	// wand.style.transform = "rotate(-10deg)";
	// wand.style.transform = "rotate(-10deg)";

}
function setRotate() {
document.getElementByID("spellName").value = "rotate";
alert(document.getElementByID("spellName").value);
}
function setShrink() {
document.getElementByID("spellName").value = "shrink";
}
function setEnlarge() {
document.getElementByID("spellName").value = "enlarge";
}
function setTranslate() {
document.getElementByID("spellName").value = "translate";
}