/* this is the primary sketch that brings everything together */

// set the size of the sketch
let w = 1500;
let h = 500;

function setup() {
	createCanvas(w, h);
	loadBG(); // load all of the backgrounds
	loadGround(); // so Carl doesn't fall off the screen with gravity
	// loadObstacles(); // load all of the obstacles
	loadCharacters(); // Carl's setup
}

function draw() {
	background(255);

	// liftOff();
	carlMovement();
	
	// draw the background first
	/* drawing things one by one will be important for when 
	there are more backgrounds for different chapters */
	drawSprites(bldgs);
	drawSprite(houseSprite);
	drawSprite(carlSprite);
	// drawSprites(cityObstacles);
}