// forces
let GRAVITY = 1;
let JUMP = 15;
let RISE = 2;

let checkLiftOff = false;

let jumpCounter = 0;

let followCarl = false;

///////////////////////////// ANIMATION MOVEMENT /////////////////////////////////////
// this section consists of movement not controlled by the user
// house lift off
function liftOff() {
	if (carlSprite.overlap(houseSprite)) { // check if Carl overlaps with the house
		carlSprite.changeAnimation('standing'); // change the animation so he's standing still
		carlSprite.position.x = houseSprite.position.x ;
		carlSprite.position.y = houseSprite.position.y + 350;
		houseSprite.velocity.y = -RISE;
		GRAVITY = 0;
		checkLiftOff = true;

		followCarl = false;
		russellSprite.changeAnimation('standing');
		russellSprite.position.y = carlSprite.position.y;
		russellSprite.position.x = carlSprite.position.x - 60;
	}
}

// retirement home worker chases after Carl
function rwMovement() {
	if (rwSprite.position.x < SCENE_W) {
		rwSprite.changeAnimation('walking');
		rwSprite.velocity.x = 4;
	} else { // he stops when the he reaches the end of the scene
		rwSprite.changeAnimation('standing');
		rwSprite.velocity.x = 0;
		setTimeout(startCh2, 3000);
	}
}

function commuterMovement() {
	for (var i = 0; i < commuters.length; i++) {
		var c = commuters[i];
		c.velocity.x = -2;
	}
}

/////////////////////////////////// CARL MOVEMENT ////////////////////////////////////
// Carl does things and interacts with game space based on player input
function carlMovement() {
	gravity(); // forces on Carl
	movement();

	if (!checkLiftOff) {
		controls(); // user controls (jump, hit)
	}
}

// character actions with input
function controls() {
	jump();
}

//// movement
function movement() {
	// camera follows Carl--but only as he moves along the x-axis
	camera.position.x = carlSprite.position.x;

	carlSprite.velocity.x = 5;
}


//// jumping
function jump() {
	// Carl jumps when the user releases the up arrow
	// limit how high he can jump (he can jump twice in one jump at most)
	if (keyWentUp('z' || 'Z') && jumpCounter < 1) {
		carlSprite.velocity.y = -JUMP;
		jumpCounter ++;
	}
	// reset jump counter when he reaches the ground
	if (carlSprite.collide(ground)) {
		jumpCounter = 0;
	}
}

// forces on character
function gravity() { // so Carl comes back down after jumping
	carlSprite.velocity.y += GRAVITY;

	/* cause characters to stop falling
	when they reach the ground */
	if (carlSprite.collide(ground)) {
		carlSprite.velocity.y = 0;
	}
}

function enemyCollision() {
	// if the retirement home worker catches Carl, the chapter starts
	// again at the beginning
	if (carlSprite.overlap(rwSprite)) {
		loadBarriers();
		reset(carlSprite, w/4, h/2);
		reset(rwSprite, 0, h * 2/3 - 15);
		reset(russellSprite, SCENE_W/2, h * 2/3 + 10);
		russellSprite.changeAnimation('standing');
		followCarl = false;
	}

	// Carl has to jump over these objects
	collisions(carlSprite);
}

function collisions(character) {
	character.collide(fireHydrants);
	character.collide(benches);
	commuters.displace(character); // commuters push back
}

function companions() {
	// Russell
	if (carlSprite.overlap(russellSprite)) {
		followCarl = true;
	}

	if (followCarl) {
		russellSprite.changeAnimation('walking');
		russellSprite.position.y = carlSprite.position.y;
		russellSprite.position.x = carlSprite.position.x - 60;
		collisions(russellSprite);
	}

	if (carlSprite.velocity.x === 0) {
		russellSprite.changeAnimation('standing');
	}

	russellSprite.collide(ground);
}