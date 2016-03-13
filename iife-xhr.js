"use strict";
function showCarnivores (carnivores) {
	console.log(carnivores);
}

function showHerbivores (herbivores) {
  console.log(herbivores);
}
//showCarnivores is the callback function
Predator.loadCarnivores(showCarnivores);