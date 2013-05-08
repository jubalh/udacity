var canvas = null;
var ctx = null;
var img = null;

var onImageLoad = function(){
	//console.log("IMAGE!!!");
	// Draw an image to the canvas at position 192,192.
	// Remember that the drawImage method is attached
	// to the 2D Context, not the canvas element!
	ctx.drawImage(img,192,192);
};

var setup = function() {
	var body = document.getElementById("body");
	canvas = document.createElement("canvas");

	ctx = canvas.getContext('2d');

	canvas.setAttribute('width', 500);
	canvas.setAttribute('height', 700);

	body.appendChild(canvas);

	img = new Image();
	img.onload = onImageLoad;
	img.src = "/media/img/gamedev/ralphyrobot.png";
};