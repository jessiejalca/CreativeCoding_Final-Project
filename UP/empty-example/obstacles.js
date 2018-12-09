// obstacle stuff
//// variables for obstacles in the city scene
////// fire hydrants
let fireHydrants;
let yFH = h * 3/4 - 10;
////// benches
let benches;
let yBench = h * 3/4 - 15;
////// commuters
let commuters;
let yCommuter = h * 3/4;
let commuterRandom;


// load all the obstacles for all the scenes
// generate random spaces
function space() {
	return Math.trunc(random(w/4 + 100, SCENE_W - 500));
}

function loadBarriers() {
	// CHAPTER 1
	// fire hydrant obstacles
	fireHydrants = new Group();
	for (var i = 0; i < 5; i++) {
		let fireHydrantSprite = createSprite(space(), yFH);
		let fireHydrantImage = loadImage('assets/fire-hydrant.png');
		fireHydrantSprite.addImage(fireHydrantImage);
		fireHydrantSprite.scale = 0.025;
		fireHydrants.add(fireHydrantSprite);
	}


	// benches obstacles
	benches = new Group();
	for (var i = 0; i < 3; i++) {
		let benchSprite = createSprite(space(), yBench);
		let benchImage = loadImage('assets/bench.png');
		benchSprite.addImage(benchImage);
		benchSprite.scale = 0.2;
		benches.add(benchSprite);
	}

	// commuters
	commuters = new Group();
	for (var i = 0; i < 15; i++) {
		let commuterSprite = createSprite(space(), yCommuter);
		
		commuterRandom = random(1);

		if (commuterRandom%2 === 0) {
			let commuterAnimF = loadAnimation('female', 'assets/commuter-female_001.png', 'assets/commuter-female_002.png');
			commuterSprite.addAnimation(commuterAnimF);
		} else {
			let commuterAnimM = loadAnimation('male', 'assets/commuter-male_001.png', 'assets/commuter-male_002.png');
			commuterSprite.addAnimation(commuterAnimM);
		}
		commuterSprite.scale = 0.5;
		commuters.add(commuterSprite);
	}
}