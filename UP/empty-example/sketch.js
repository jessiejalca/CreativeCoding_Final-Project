/* this is the primary sketch that brings everything together */

// set the size of the sketch
let w = 1500;
let h = 500;

let themeSong;

let title = 'UP: Chapter 1';
let subtitle = '"Public Menace"';
let start = 'Click anywhere to start.';
let instructions = 'Use Z to jump and X to whack people.';
let objectives = "Find Russell and make it to Carl's house before";
let objectives2 = "getting caught by the retirement home worker.";
let gameOverTitle = 'GAME OVER';
let font;
let startHouse;
let clouds;
let cloudRandom;
let cloudVelocity;

// initialize the scene's width
let SCENE_W = 15000;

let startScreen = true;
let startGame = false;

function preload() {
	soundFormats('mp3', 'ogg');
	themeSong = loadSound('assets/up-theme-song.mp3');
}

function setup() {
	createCanvas(w, h);

	loadStart(); // load the start page
	loadBG(); // load all of the backgrounds
	loadGround(); // so Carl doesn't fall off the screen with gravity
	loadBarriers(); // load all of the obstacles
	loadCharacters(); // character set up
	// loadScript();
	
	themeSong.playMode('restart');
	themeSong.play();
}

function draw() {
	background(255);

	if (startScreen) {
		camera.off();
		drawStart();
	} else if (startGame) {
		camera.on();
		drawGame();
		drawSprite(ground);
		liftOff();
		carlMovement();
		companions();
		gameOver();
		actionGame();
		// objectives();
		// writeScript();
	}
}

function mouseClicked() {
	if (startScreen) {
		startScreen = false;
		startGame = true;
		restart();
		carlSprite.velocity.x = 5;
		rwSprite.velocity.x = 4.5;
	}
}

function loadStart() {
	font = loadFont('assets/gnyrwn971.ttf');
	startHouse = createSprite(w/2, h/2);
	startHouse.addAnimation('house', 'assets/uphouse002.png');
	startHouse.scale = 0.25;

	clouds = new Group();

	for (var i = 0; i < 5; i++) {
		cloudRandom = floor(random(1, 5));
		cloudVelocity = random(0.1, 1);

		let cloudSprite = createSprite(random(0, w), random(0, h));

		cloudSprite.addAnimation('drifting cloud', 'assets/cloud00'+cloudRandom+'.png');
		cloudSprite.scale = 0.15;
		cloudSprite.velocity.x = cloudVelocity;
		clouds.add(cloudSprite);
	}
}

function drawStart() {
	for (var i = 0; i < clouds.length; i++) {
		let c = clouds[i];
		if (c.position.x > w + 10)
			c.position.x = -10;
	}

	startHouse.attractionPoint(0.005, mouseX, mouseY);
	drawSprite(startHouse);
	drawSprites(clouds);

	fill(255, 200);
	noStroke();
	rectMode(CENTER);
	rect(w/2, h/3 + 50, 500, 400);

	fill(0);
	textFont(font);
	textAlign(CENTER);

	textSize(82);
	text(title, w/2, h/3);

	textSize(48);
	text(subtitle, w/2, h/3 + 60)

	textSize(24);
	text(objectives, w/2, h/3 + 120);
	text(objectives2, w/2, h/3 + 150);

	textSize(18);
	text(start, w/2, h/3 + 200);
	text(instructions, w/2, h/3 + 230);
}

function drawGame() {
	drawSprite(houseSprite);
	drawSprites(bldgs);
	drawSprite(carlSprite);
	drawSprite(russellSprite);
	drawSprites(cWorkers);
	drawSprite(rwSprite);
	drawSprites(fireHydrants);
	drawSprites(benches);
	drawSprites(commuters);
}

function actionGame() {
	rwMovement();
	commuterMovement();
}

function endCredits() {
	fill(0);
	textSize(64);
	textAlign(RIGHT);
	text('Designer & Developer      Jessie Jalca', SCENE_W - 150, h*(-2));
	text('Music            "Married Life"', SCENE_W + 150, h*(-3) - 150);
	text('Composed by       Michael Giacchino', SCENE_W + 150, h*(-3) - 75);
	text('Performed by      Matthew Chong', SCENE_W + 150, h*(-3));
	textAlign(CENTER);
	text("Inspired by Disney's Up", SCENE_W, h*(-4));
}