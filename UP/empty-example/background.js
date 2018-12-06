/* this creates the city scene */

// initialize variables for the buildings in the city scene
let bldgs;
let xbldg = 100;
let ybldg;

// eventually this function will load all backgrounds throughout the game
function loadBG() {
	loadBldgs();
}

function loadBldgs() {
	// set up buildings for the city scene (Chapter 2)

	// group the buildings together into a special sprites array
	bldgs = new Group(); 

	// load all of the buildings with a loop to simplify code
	for(var i = 0; i < 10; i++) {
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