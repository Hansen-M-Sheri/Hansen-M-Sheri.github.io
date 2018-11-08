//set canvas size in js
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //draw on the canvas c = context
// var c = canvas.getContext('2d');
// c.fillStyle="green";
// c.fillRect(100, 100, 30, 30);

// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "red";
// c.stroke();

// //arc / circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.beginPath();
// c.arc(300, 300, 20, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// //create a lot of circles with a forloop
// for (var i = 0; i < 20; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(300, 300, 30, 0, Math.PI * 2, false);
	
// 	c.strokeStyle = "blue";
// 	c.stroke();
// }
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
function animate() {
	requestAnimationFrame(animate);
	c.clearRec(0,0,innerWidth, innerHeight);
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	
	c.strokeStyle = "blue";
	c.stroke();

	if(x + radius>innerWidth || x - radius < 0) {
		dx = -dx;
	}
	x += dx;
}