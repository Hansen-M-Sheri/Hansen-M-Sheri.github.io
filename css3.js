function castSpell(spellName) {
	//transform wand 2 times to left and then 4 times to right to simulate shaking
	alert("spellName = " + spellName);
	//var wand = document.getElementById("wand");
	var wand = document.getElementById("wand");
	
	switch(spellName){
		case "rotate":
			rotateSpell();
			break;
		case "shrink":
			scaleSpell();
			break;
		case "disappear":
			transitionSpell();
			break;
		case "tranlate":
			translateSpell();
			break;
		default:
			alert("No spell called " + spellName);

	}

}
function setRotate() {
document.getElementById("spellName").value = "rotate";
alert(document.getElementById("spellName").value);
}
function setShrink() {
document.getElementById("spellName").value = "shrink";
alert(document.getElementById("spellName").value);
}
function setDisappear() {
document.getElementById("spellName").value = "disappear";
alert(document.getElementById("spellName").value);
}
function setTranslate() {
document.getElementById("spellName").value = "translate";
alert(document.getElementById("spellName").value);
}

function rotateSpell(){
	var box = document.getElementById("redBox");
	box.style.transform = "rotate(-20deg)";
}

function scaleSpell() {
	var box = document.getElementById("greenBox");
	box.style.transform = "scale(.5, .5)";
}

function transitionSpell() {
	var box = document.getElementById("blueBox");
	box.style.opacity = '0';
}

function translateSpell() {
	var box = document.getElementById("purpleBox");
	box.style.tranform = "translate(50px, 100px)";
}


