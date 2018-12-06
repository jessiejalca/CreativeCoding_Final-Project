/* this creates the environment around Carl */

// initialize the scene's width
let SCENE_W = 1500;

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

// obstacle stuff
//// variables for obstacles in the city scene
let cityObstacles;
let xOC = w + 200;
let yOC = h * 3/4; 
let newObstacle;

function loadGround() {
	/* make an invisible platform under Carl to keep him from falling
	forever with gravity*/
	ground = createSprite(w/4, h * 4/5, 50, 2);
	ground.shapeColor = color(255); // make it invisible
}

// eventually this function will load all backgrounds throughout the game
function loadBG() {
	loadBldgs();
	loadHouse();
}

function loadHouse() {
	xhouse = SCENE_W;
	yhouse = h/2;

	house = loadAnimation('assets/uphouse001.png');
	houseSprite = createSprite(xhouse, yhouse);
	houseSprite.addAnimation('still house', house);
	houseSprite.scale = 0.1;
}


function loadBldgs() {
	// set up buildings for the city scene (Chapter 2)

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
		/* side note: scaling the buildings doesn't work because the
		group feature doesn't implement the method like a single sprite
		does, so instead I had to resize the images on Photoshop rather 
		than scale them like I did with Carl*/
		let newBldg = createSprite(xbldg, ybldg);
		let newBldgSprite = loadImage('assets/bldg00'+randomBldg+'.png');
		newBldg.addImage(newBldgSprite);
		bldgs.add(newBldg);

		xbldg += 270; // space out the buildings
	}
}

// this function will eventually load the different obstacles for different scenes
function loadObstacles() {
	cityObstacles = new Group();

	while(xOC < SCENE_W - 500) {
		let randomSpace = Math.trunc(random(0, 400));
		
		newObstacle = createSprite(xOC, yOC, 50, 50);
		cityObstacles.add(newObstacle);
		xOC += randomSpace;
	}
}

