"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'blue') {
		document.body.style.color = 'red';
	} else {
		document.body.style.color = 'blue';
	}
}