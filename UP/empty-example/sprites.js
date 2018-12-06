/* this sets up all characters to be loaded in the setup()
and drawn later in draw() */

// characters (sprites)
let carl;
let carlSprite;

// environment
let ground;

function loadCharacters() {
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
	carlSprite.setDefaultCollider();
}

function loadGround() {
	/* make an invisible platform under Carl to keep him from falling
	forever */
	ground = createSprite(w/4, h * 3/4, 50, 2);
	ground.shapeColor = color(255); // make it invisible
}