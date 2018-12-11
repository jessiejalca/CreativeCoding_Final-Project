/* this creates the environment around Carl */

// initialize house variables
let house;
let houseSprite;
let xhouse;
let yhouse;

// initialize a sprite for somewhere for Carl to land
let ground;

// background stuff
//// variables for the buildings in the city scene
let bldgs;
let xbldg = 100;
let ybldg; 


function loadGround() {
	ground = createSprite(SCENE_W/2, h * 4/5, SCENE_W*2, 10);
	ground.shapeColor = color(0);
}


function loadBG() {
	loadBldgs();
	loadHouse();
}

function loadHouse() {
	xhouse = SCENE_W;
	yhouse = -10;

	house = loadAnimation('assets/uphouse002.png');
	houseSprite = createSprite(xhouse, yhouse);
	houseSprite.addAnimation('still house', house);
	houseSprite.scale = 0.5;
}

function loadBldgs() {
	// set up buildings for the city scene

	// group the buildings together into a special sprites array
	bldgs = new Group(); 

	// load all of the buildings with a loop to simplify code
	while (xbldg < SCENE_W - 200) {
		// randomly choose a building to generate for a single iteration
		// truncate the float that's returned
		let randomBldg = Math.trunc(random(1, 6));

		/* because some buildings are smaller and their placements are
		determined by the center of the picture, I've set them to have
		y-values that allow them to line up better */
		if (randomBldg === 5) {
			ybldg = h/2;
		} else if (randomBldg === 4) {
			ybldg = h/3;
		} else {
			ybldg = h/4;
		}

		// load the buildings into the bldgs group
		let newBldgSprite = createSprite(xbldg, ybldg);
		let newBldgImage = loadImage('assets/bldg00'+randomBldg+'.png');
		newBldgSprite.addImage(newBldgImage);
		bldgs.add(newBldgSprite);

		xbldg += 270; // space out the buildings
	}
}