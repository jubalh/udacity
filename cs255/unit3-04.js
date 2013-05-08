setup = function() {
	var body = document.getElementById('body');
	var canvas = document.createElement('canvas');

	var ctx = canvas.getContext('2d');
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	body.appendChild(canvas);

	// Create a new image with:
	// a 'src' attribute of "/media/img/gamedev/ralphyrobot.png"
	// and an 'onload' attribute of onImageLoad
	//var img = new Image();
    img.onload = onImageLoad;
    img.src = "/media/img/gamedev/ralphyrobot.png";
};

onImageLoad = function(){
	// Use the console.log function to print a statement to the browser console.
	// This will print once the image has been downloaded.
    //console.log('loaded');
    alert('loaded');
};

// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();