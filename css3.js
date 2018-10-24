function castSpell() {
	//transform wand 2 times to left and then 4 times to right to simulate shaking
	//var wand = document.getElementById("wand");
	var wand = document.getElementById("wand");

	wand.style.transform = "rotate(-10deg)";
	wand.style.transform = "rotate(-10deg)";
	wand.style.transform = "rotate(10deg)";
	wand.style.transform = "rotate(10deg)";
	wand.style.transform = "rotate(10deg)";
	wand.style.transform = "rotate(10deg)";
	wand.style.transform = "rotate(-10deg)";
	wand.style.transform = "rotate(-10deg)";

}