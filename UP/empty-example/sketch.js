let w = 1500;
let h = 600;

function setup() {
	createCanvas(w, h);
	loadEnvironment(); // environment setup
	loadCharacters(); // Carl's setup
}

function draw() {
	background(255);
	
	carlAction();
	
	drawSprites(); // draw all sprites
}