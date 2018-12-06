/* this is the primary sketch that brings everything together */

// set the size of the sketch
let w = 1500;
let h = 500;

let obstacle;

function setup() {
	createCanvas(w, h);
	loadBG(); // load background
	loadGround(); // so Carl doesn't fall off the screen with gravity
	loadCharacters(); // Carl's setup
	// loadObstacle();
	obstacle = createSprite(800, h * 3/4, 50, 50);
}

function draw() {
	background(255);

	// displayBldgs();
	carlMovement();
	carlSprite.collide(obstacle);
	
	// draw the background first
	/* drawing things one by one will be important for when 
	there are more backgrounds for different chapters */
	drawSprites(bldgs);
	drawSprite(carlSprite);
	drawSprite(obstacle);
}