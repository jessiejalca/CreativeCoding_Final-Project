/* this sets up all characters to be loaded in the setup()
and drawn later in draw() */

// characters (sprites)
let carl;
let carlSprite;

let rwSprite;
let rwAnimation;

function loadCharacters() {
	loadCarl();
	loadRetirementWorker();
}

function loadCarl() {
	// loading Carl; different animations are being set for different occasions
	carl = loadAnimation('assets/carl-walking001.png', 'assets/carl-walking002.png');
	carlSprite = createSprite(w/4, h/2); // set his initial position
	carlSprite.addAnimation('moving', carl);
	carlSprite.addAnimation('standing', 'assets/carl-front.png');
	carlSprite.addAnimation('get ready to jump', 'assets/carl-jumping.png');

	// scale Carl so he isn't ginormous
	carlSprite.scale = 0.075;

	/* set Carl up with a perimeter for detecting collisions
	with other sprites */
	// carlSprite.setDefaultCollider();
}

function loadRetirementWorker() {
	rwAnimation = loadAnimation('assets/retirement-home-dude_001.png', 'assets/retirement-home-dude_002.png');
	rwSprite = createSprite(0, h * 2/3 - 15);
	rwSprite.addAnimation('walking', rwAnimation);

	rwSprite.scale = 0.05;
}