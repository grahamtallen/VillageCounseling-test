'use strict';

// this is for you to better understand how the layers work
// DELETE BEFORE DEPLOYMENT
let debugInput = document.querySelector('input');
function updateDebugState() {
	document.body.classList.toggle('debugOn', debugInput.checked);
}
debugInput.addEventListener('click', updateDebugState);
updateDebugState();
