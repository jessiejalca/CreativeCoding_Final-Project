/* this is the primary sketch that brings everything together */

// set the size of the sketch
let w = 1500;
let h = 500;

// initialize the scene's width
let SCENE_W = 3000;

function setup() {
	createCanvas(w, h);
	loadBG(); // load all of the backgrounds
	loadGround(); // so Carl doesn't fall off the screen with gravity
	// loadBarriers(); // load all of the obstacles
	loadCharacters(); // character set up
}

function draw() {
	background(255);

	liftOff();
	carlMovement();
	rwMovement();
	
	// draw the background first
	/* drawing things one by one will be important for when 
	there are more backgrounds for different chapters. it's
	also good for layering everything correctly */
	drawSprites(bldgs);
	drawSprite(houseSprite);
	drawSprite(rwSprite);
	drawSprite(carlSprite);
	// drawSprites(fireHydrants);
	drawSprite(ground);
}