/* this sets up all characters to be loaded in the setup()
and drawn later in draw() */

// characters (sprites)
let carl;
let carlSprite;

let russellAnimation;
let russellSprite;

let rwSprite;
let rwAnimation;

function loadCharacters() {
	loadCarl();
	loadRussell();
	loadRetirementWorker();
}

function loadCarl() {
	// loading Carl; different animations are being set for different occasions
	carl = loadAnimation('assets/carl-walking001.png', 'assets/carl-walking002.png');
	carlSprite = createSprite(w/4, h/2); // set his initial position
	carlSprite.addAnimation('moving', carl);
	carlSprite.addAnimation('standing', 'assets/carl-front.png');
	carlSprite.addAnimation('attacking', 'assets/carl-hitting-stuff001.png', 'assets/carl-hitting-stuff002.png');

	// scale Carl so he isn't ginormous
	carlSprite.scale = 0.075;
}

function loadRussell() {
	russellAnimation = loadAnimation('assets/russell-walking001.png', 'assets/russell-walking002.png');
	russellSprite = createSprite(SCENE_W/2, h * 2/3 + 10);
	russellSprite.addAnimation('walking', russellAnimation);
	russellSprite.addAnimation('standing', 'assets/russell-front.png');
	russellSprite.scale = 0.04;

	russellSprite.changeAnimation('standing');
}

function loadRetirementWorker() {
	rwAnimation = loadAnimation('assets/retirement-home-dude_001.png', 'assets/retirement-home-dude_002.png');
	rwSprite = createSprite(0, h * 2/3 - 15);
	rwSprite.addAnimation('walking', rwAnimation);
	rwSprite.addAnimation('standing', 'assets/retirement-home-dude_003.png');
	rwSprite.scale = 0.05;
}