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
document.getElementById("spellName").value = "rotate";
alert(document.getElementById("spellName").value);
}
function setShrink() {
document.getElementById("spellName").value = "shrink";
alert(document.getElementById("spellName").value);
}
function setEnlarge() {
document.getElementById("spellName").value = "enlarge";
alert(document.getElementById("spellName").value);
}
function setTranslate() {
document.getElementById("spellName").value = "translate";
alert(document.getElementById("spellName").value);
}