// forces
let GRAVITY = 1;
let JUMP = 15;
let RISE = 2;

let checkLiftOff = false;
let attackMode = false;

let jumpCounter = 0;

let followCarl = false;
let gotRussell = false;

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
	} else { // he stops when the he reaches the end of the scene
		rwSprite.changeAnimation('standing');
		rwSprite.velocity.x = 0;
		setTimeout(endScene, 3000);
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

// movement
function movement() {
	// camera follows Carl--but only as he moves along the x-axis
	camera.position.x = carlSprite.position.x;
	// Carl moves continuously
}


// character actions with input
function controls() {
	jump();
	attack();
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

//// attacking
function attack() {
	if (keyDown('x' || 'X')) {
		carlSprite.changeAnimation('attacking');
		attackMode = true;
	} else {
		carlSprite.changeAnimation('moving');
		attackMode = false;
	}
}

//// obstacles
function collisions(character) {
	character.collide(fireHydrants);
	character.collide(benches);
	commuters.displace(character); // commuters push back
	character.collide(cWorkers, hit);
}

function hit(spriteA, spriteB) {
	if (attackMode) {
		spriteB.velocity.y = 5;
		spriteB.rotationSpeed = 5;
		spriteB.setCollider('circle', 0, 0, 1);
		spriteB.changeAnimation('dizzy');
		spriteB.draw();
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

// Russell follows Carl
function companions() {
	// Russell
	if (carlSprite.overlap(russellSprite)) {
		followCarl = true;
		gotRussell = true;
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

//////////////////////////////// END GAME ///////////////////////////////////////////////
// return true to go to game over screen
function gameOver() {
	// if the retirement home worker catches Carl, the chapter starts
	// again at the beginning
	if (carlSprite.overlap(rwSprite) || 
		carlSprite.position.y > ground.position.y || 
		carlSprite.position.x > russellSprite.position.x && !gotRussell) {

		restart();
		startScreen = true;
		startGame = false;
	}

	// Carl has to jump over these objects
	collisions(carlSprite);
}

function restart() {
	loadBarriers();
	reset(carlSprite, w/4, h/2);
	reset(rwSprite, 0, h * 2/3 - 15);
	reset(russellSprite, SCENE_W/2, h * 2/3 + 10);
	followCarl = false;
	russellSprite.changeAnimation('standing');
}

function reset(character, startX, startY) {
	character.position.x = startX;
	character.position.y = startY;
}