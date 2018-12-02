// forces
let GRAVITY = 1;
let JUMP = 15;

// functions
//// Carl does things and interacts with game space based on player input
function carlAction() {
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
	if (keyDown(LEFT_ARROW)) {
		carlSprite.changeAnimation('moving');
		carlSprite.mirrorX(-1);
		carlSprite.velocity.x = -5;
	} else if (keyDown(RIGHT_ARROW)) {
		carlSprite.changeAnimation('moving');
		carlSprite.mirrorX(1);
		carlSprite.velocity.x = 5;
	} else {
		carlSprite.changeAnimation('standing');
		carlSprite.velocity.x = 0;
	}
}

////// jumping
function jump() {
	if (keyDown(UP_ARROW)) {
		carlSprite.changeAnimation('get ready to jump');
		carlSprite.velocity.x = 0;
	}
	if (keyWentUp(UP_ARROW)) {
		carlSprite.velocity.y = -JUMP;
	}
}

//// forces on character
function gravity() {
	carlSprite.velocity.y += GRAVITY;

	/* cause characters to stop falling
	when they reach the ground */
	if (carlSprite.collide(groundSprite)) {
		carlSprite.velocity.y = 0;
	}
}