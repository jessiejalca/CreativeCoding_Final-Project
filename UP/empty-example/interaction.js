// forces
let GRAVITY = 1;
let JUMP = 15;

// functions
//// Carl does things and interacts with game space based on player input
function displayCarl() {
	gravity(); // forces on Carl
	moveWithInput(); // basic movements (left, right, stand)
}

//// character actions with input
function moveWithInput() {
	walk(); // move left and right
	jump(); // jump
}

////// walking
function walk() {
	// move Carl and friends with left/right arrow keys
	if (keyDown(LEFT_ARROW)) { // go left with the left arrow key
		// animation to make Carl look like he's walking
		carlSprite.changeAnimation('moving');

		// make sure he's facing the right (or I guess in this case, left) direction
		carlSprite.mirrorX(-1);

		// make him actually move, and keep the ground underneath him
		carlSprite.velocity.x = -5;
		ground.velocity.x = -5;

	} else if (keyDown(RIGHT_ARROW)) { // go right with the right arrow key
		// animation to make Carl look like he's walking
		carlSprite.changeAnimation('moving');

		// make sure he's facing the right direction
		carlSprite.mirrorX(1);

		// make him actually move, and keep the ground underneath him
		carlSprite.velocity.x = 5;
		ground.velocity.x = 5;

	} else { // stop Carl when neither the left nor right keys are being pressed
		// change animation so he's just standing there
		// note: it still reflects based on the direction he was last walking in
		carlSprite.changeAnimation('standing');

		// make him stop moving
		carlSprite.velocity.x = 0;
		ground.velocity.x = 0;
	}

	// Don't let Carl go off the screen
	if (carlSprite.position.x <= 0) {
		// make Carl stop
		carlSprite.position.x = 0;

		/* keep the invisible platform with him too in case the user
		keeps holding down the left arrow key */
		ground.position.x = 0; 
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