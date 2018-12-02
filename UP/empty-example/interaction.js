// forces
let GRAVITY = 1;
let JUMP = 15;

// functions
function carlAction() { // Carl does things and interacts with game space based on player input
	carlSprite.velocity.y += GRAVITY;
	//// colliding
	if (carlSprite.collide(groundSprite)) {
		carlSprite.velocity.y = 0;
	}
	// basic movements (left, right, stand)
	if (keyIsDown(LEFT_ARROW)) {
		carlSprite.changeAnimation('moving');
		carlSprite.mirrorX(-1);
		carlSprite.velocity.x = -5;
	} else if (keyIsDown(RIGHT_ARROW)) {
		carlSprite.changeAnimation('moving');
		carlSprite.mirrorX(1);
		carlSprite.velocity.x = 5;
	} else {
		carlSprite.changeAnimation('standing');
		carlSprite.velocity.x = 0;
	}
	//// jumping
	if (keyIsDown(UP_ARROW)) {
		carlSprite.changeAnimation('get ready to jump');
		carlSprite.velocity.x = 0;
	}
	if (keyWentUp(UP_ARROW)) {
		carlSprite.velocity.y = -JUMP;
	}
}