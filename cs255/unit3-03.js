setup = function() {
	// Grab the body element using document.getElementById,
	// assume the body element has an id of 'body'.
	// Create a canvas element using document.createElement,
	// then set the width and height properties to 1200 and
	// 720, respectively.
	// Finally, append the canvas element to the body.
   // Note that all the variables you'll need for this
   // have already been created and assigned a value of
   // null. You'll need to modify this assignment to
   // the correct value as specified above.
   var body = document.getElementById('body');
	var canvas = document.createElement('canvas');
   canvas.width = 1200;
	canvas.height = 720;
   body.appendElement(canvas);
};

// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();