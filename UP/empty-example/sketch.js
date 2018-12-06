/* this is the primary sketch that brings everything together */

// set the size of the sketch
let w = 1500;
let h = 500;

function setup() {
	createCanvas(w, h);
	loadBG(); // load background
	loadGround(); // so Carl doesn't fall off the screen with gravity
	loadCharacters(); // Carl's setup
	// loadObstacle();
	// let obstacleSprite = createSprite(w/3, h/3, 20, 50);
}

function draw() {
	background(255);

	// displayBldgs();
	displayCarl();
	
	// draw the background first
	/* drawing things one by one will be important for when 
	there are more backgrounds for different chapters */
	drawSprites(bldgs);
	drawSprite(carlSprite);
}