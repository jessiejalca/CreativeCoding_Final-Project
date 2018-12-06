// forces
let GRAVITY = 1;
let JUMP = 15;

let diffX; // initialize a variable that will check the distance b/w the camera's x value and Carl's x value

function loadGround() {
	/* make an invisible platform under Carl to keep him from falling
	forever with gravity*/
	ground = createSprite(w/4, h * 4/5, 50, 2);
	ground.shapeColor = color(255); // make it invisible
}

// functions
//// Carl does things and interacts with game space based on player input
function carlMovement() {
	gravity(); // forces on Carl
	controls(); // basic movements (left, right, stand)
}

//// character actions with input
function controls() {
	walk(); // move left and right
	jump(); // jump
}

////// movement
function movement() {
	// camera follows Carl--but only as he moves along the x-axis
	camera.position.x = carlSprite.position.x;

	// keep the ground underneath him at all times
	ground.position.x = carlSprite.position.x;

	// constrain Carl's movements
	if (carlSprite.position.x < w/3) { // on the left
		// make Carl stop
		carlSprite.position.x = w/3;
	}
	if (carlSprite.position.x > SCENE_W) {
		carlSprite.position.x = SCENE_W;
	}
}

////// walking
function walk() {
	movement();

	// move Carl and friends with left/right arrow keys
	if (keyDown(LEFT_ARROW)) { // go left with the left arrow key
		// animation to make Carl look like he's walking
		carlSprite.changeAnimation('moving');

		// make sure he's facing the right (or I guess in this case, left) direction
		carlSprite.mirrorX(-1);

		// make him actually move
		carlSprite.velocity.x = -5;

	} else if (keyDown(RIGHT_ARROW)) { // go right with the right arrow key
		// animation to make Carl look like he's walking
		carlSprite.changeAnimation('moving');

		// make sure he's facing the right direction
		carlSprite.mirrorX(1);

		// make him actually move
		carlSprite.velocity.x = 5;

	} else { // stop Carl when neither the left nor right keys are being pressed
		// change animation so he's just standing there
		// note: it still reflects based on the direction he was last walking in
		carlSprite.changeAnimation('standing');

		// make him stop moving
		carlSprite.velocity.x = 0;
	}

	// if (carlSprite.collide(obstacleSprite)) {
	// 	carlSprite.velocity.x = 0;
	// }
}

////// jumping
function jump() {
	// Carl gets ready to jump when the up arrow is pressed
	if (keyDown(UP_ARROW)) {
		carlSprite.changeAnimation('get ready to jump');
		carlSprite.velocity.x = 0;
		ground.velocity.x = 0;
	}

	// Carl jumps when the user releases the up arrow
	if (keyWentUp(UP_ARROW)) {
		carlSprite.velocity.y = -JUMP;
	}
}

//// forces on character
function gravity() { // so Carl comes back down after jumping
	carlSprite.velocity.y += GRAVITY;

	/* cause characters to stop falling
	when they reach the ground */
	if (carlSprite.collide(ground)) {
		carlSprite.velocity.y = 0;
	}
}