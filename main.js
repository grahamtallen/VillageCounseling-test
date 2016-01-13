'user strict';

var debugInput = document.querySelector('input');
function updateDebugState() {
	document.body.classList.toggle('debugOn', debugInput.checked);
}
debugInput.addEventListener('click', updateDebugState);
updateDebugState();
