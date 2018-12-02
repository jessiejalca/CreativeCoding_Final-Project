// characters (sprites)
let carl;
let carlSprite;

// environment
let groundCity;
let bgCity;

function loadCharacters() {
	// loading Carl
	carl = loadAnimation('assets/carl-walking001.png', 'assets/carl-walking002.png');
	carlSprite = createSprite(w/4, h/2);
	carlSprite.addAnimation('moving', carl);
	carlSprite.addAnimation('standing', 'assets/carl-front.png');
	carlSprite.addAnimation('get ready to jump', 'assets/carl-jumping.png');
	carlSprite.scale = 0.075;
	carlSprite.setDefaultCollider();
}

function loadEnvironment() {
	//// ground
	loadGround();
	//// background
	loadBackground();	
}

function loadGround() {
	// city ground
	groundCity = loadImage('assets/ground-city.png');
	groundSprite = createSprite(w/4, h * 4/5);
	groundSprite.addImage(groundCity);
	groundSprite.scale = 0.2;
}

function loadBackground() {
	// city background
	bgCity = loadImage('assets/bg-city.png');
	bgSprite = createSprite(w/4, h * 2/5);
	bgSprite.addImage(bgCity);
	bgSprite.scale = 0.2;
}