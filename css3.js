function castSpell() {
	//rotate wand 2 times to left and then 4 times to right to simulate shaking
	var wand = getElementById("wand");
	wand.style.rotate = -10;
	wand.style.rotate = -10;
	wand.style.rotate = 10;
	wand.style.rotate = 10;
	wand.style.rotate = 10;
	wand.style.rotate = 10;
	wand.style.rotate = -10;
	wand.style.rotate = -10;

}