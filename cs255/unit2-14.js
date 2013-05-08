// 1) Grab the body DOM object and store it in
//	  a variable for later use. Assume that the
//    body element has an id of 'body'.
// 2) Create a new div DOM object, and set its
//	  id to "gameContent".
// 3) Create a new canvas DOM object and set its
//	  id to "gameCanvas".
// 4) Attach the canvas DOM object to the div,
//	  and the div DOM object to the body.
// You'll need to use the document.getElementById,
// document.createElement, as well as the
// <DOM Object>.appendChild methods to accomplish
// this. You'll also need to modify the id property
// of the DOM objects you create.
//
var manipulateDOM = function() {
    // 1
    var oBody = document.getElementById('body');
    // 2
    var oDiv = document.createElement('div');
    oDiv.id = 'gameContent';
    // 3
    var oCanvas = document.createElement('canvas');
    oCanvas.id = 'gameCanvas';
    // 4
    oDiv.appendChild(oCanvas);
    oBody.appendChild(oDiv);
};