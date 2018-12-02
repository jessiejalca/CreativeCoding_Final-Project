// characters (sprites)
let carl;
let carlSprite;

// environment
let street;
let skyline;

function preload() {
	// environment setup
	//// ground
	street = loadImage('assets/ground-city.png');
	groundSprite = createSprite(w/2, h * 5/6);
	groundSprite.addImage(street);
	groundSprite.scale = 0.2;
	//// background
	skyline = loadImage('assets/skyline.png');
	bgSprite = createSprite(w/2, h/3);
	bgSprite.addImage(skyline);
	bgSprite.scale = 0.2;
	
	// Carl's setup
	carl = loadAnimation('assets/carl-walking001.png', 'assets/carl-walking002.png');
	carlSprite = createSprite(w/2, h/2);
	carlSprite.addAnimation('moving', carl);
	carlSprite.addAnimation('standing', 'assets/carl-front.png');
	carlSprite.addAnimation('get ready to jump', 'assets/carl-jumping.png');
	carlSprite.scale = 0.075;
	carlSprite.setDefaultCollider();
}