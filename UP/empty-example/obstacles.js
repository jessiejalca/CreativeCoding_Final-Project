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
let yCommuter = h * 3/4 - 40;
let commuterRandom;
////// construction workers
let cWorkers;
let yCWorkers = h * 3/4 - 40;


// load all the obstacles for all the scenes
// generate random spaces
function space() {
	return Math.trunc(random(w, SCENE_W));
}

function loadBarriers() {
	// Chapter 1
	loadFireHydrants();
	loadBenches();
	loadCommuters();
	loadConstructionWorkers();
}

function loadFireHydrants() {
	// fire hydrant obstacles
	fireHydrants = new Group();
	let fireHydrantImage = loadImage('assets/fire-hydrant.png');
	for (var i = 0; i < 5; i++) {
		let fireHydrantSprite = createSprite(space(), yFH);
		fireHydrantSprite.addImage(fireHydrantImage);
		fireHydrantSprite.scale = 0.025;
		fireHydrants.add(fireHydrantSprite);
	}
}

function loadBenches() {
	// benches obstacles
	benches = new Group();
	let benchImage = loadImage('assets/bench.png');
	for (var i = 0; i < 3; i++) {
		let benchSprite = createSprite(space(), yBench);
		benchSprite.addImage(benchImage);
		benchSprite.scale = 0.2;
		benches.add(benchSprite);
	}
}

function loadCommuters() {
	// commuters
	commuters = new Group();
	let commuterAnimF = loadAnimation('assets/commuter-female_001.png', 'assets/commuter-female_002.png');
	let commuterAnimM = loadAnimation('assets/commuter-male_001.png', 'assets/commuter-male_002.png');

	for (var i = 0; i < 10; i++) {
		commuterRandom = floor(random(1, 3));
		let commuterSprite = createSprite(space(), yCommuter);
		
		if (commuterRandom === 1) {
			commuterSprite.addAnimation('female', commuterAnimF);
		} else {
			commuterSprite.addAnimation('male', commuterAnimM);
		}

		commuterSprite.scale = 0.075;
		commuters.add(commuterSprite);
	}
}

function loadConstructionWorkers() {
	cWorkers = new Group();
	let cwAnimation = loadAnimation('assets/construction-worker001.png');
	for (var i = 0; i < 10; i++) {
		cwSprite = createSprite(space(), yCWorkers);
		cwSprite.addAnimation('standing', cwAnimation);
		cwSprite.addAnimation('dizzy', 'assets/construction-worker002.png', 'assets/construction-worker003.png');
		cwSprite.scale = 0.06;
		cWorkers.add(cwSprite);
	}
}