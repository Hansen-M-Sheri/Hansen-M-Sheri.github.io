function castSpell(spellName) {
	
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
		case "translate":
			translateSpell();
			break;
		default:
			alert("No spell called " + spellName);

	}

}
function setRotate() {
document.getElementById("spellName").value = "rotate";

}
function setShrink() {
document.getElementById("spellName").value = "shrink";

}
function setDisappear() {
document.getElementById("spellName").value = "disappear";

}
function setTranslate() {
document.getElementById("spellName").value = "translate";

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
	box.style.transform = "translate(50px, 100px)";
	console.log("translateSpell reached end of method");
}


