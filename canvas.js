//set canvas size in js
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//draw on the canvas c = context
var c = canvas.getContext('2d');
c.fillRect(100, 100, 30, 30);