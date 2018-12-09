// obstacle stuff
//// variables for obstacles in the city scene
////// fire hydrants
let fireHydrants;
let xFH = w + 200;
let yFH = h * 3/4;


// load all the obstacles for all the scenes
// generate random spaces
function space() {
	return Math.trunc(random(w/4 + 100, 400));
}

function loadBarriers() {

	// fire hydrant obstacles
	fireHydrants = new Group();

	while (xFH < SCENE_W - 500) {
		let fhSprite = createSprite(xFH, yFH);
		let fhImage = loadImage('assets/fire-hydrant.png');
		fhSprite.addImage(fhImage);
		fireHydrants.add(fhSprite);

		xFH += space();
	}
}