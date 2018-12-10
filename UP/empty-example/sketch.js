/* this is the primary sketch that brings everything together */

// set the size of the sketch
let w = 1500;
let h = 500;

// initialize the scene's width
let SCENE_W = 15000;

let ch1 = true;
let ch2 = false;

function setup() {
	createCanvas(w, h);
	loadBG(); // load all of the backgrounds
	loadGround(); // so Carl doesn't fall off the screen with gravity
	loadBarriers(); // load all of the obstacles
	loadCharacters(); // character set up
}

function draw() {
	background(255);

	// generic movement
	liftOff();
	carlMovement();
	companions();
	enemyCollision();

	// chapter-specific movement
	movementCh1();
	
	// draw the background first
	/* drawing things one by one will be important for when 
	there are more backgrounds for different chapters. it's
	also good for layering everything correctly */

	if (ch1) {
		drawCh1();
	}
	
	drawSprite(ground);
}

function drawCh1() {
	drawSprite(houseSprite);
	drawSprites(bldgs);
	drawSprite(carlSprite);
	drawSprite(russellSprite);
	drawSprite(rwSprite);
	drawSprites(fireHydrants);
	drawSprites(benches);
	drawSprites(commuters);
}

function movementCh1() {
	rwMovement();
	commuterMovement();
}