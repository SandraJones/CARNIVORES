"use strict";
let list = document.getElementById("carnivores-list");
let outputString = "";
function showCarnivores(carnivores) {
   for (let i = 0; i < carnivores.length; i++) {
      let currentCarnivore = carnivores[i];
      outputString += `<h1>${currentCarnivore.name}</h1>`;
      outputString += `<h3>${currentCarnivore.family}</h3>`;
      list.innerHTML += outputString;
      }
    }
function showHerbivores(herbivores) {
  let list = document.getElementById("herbivores-list");
     for (let i = 0; i < herbivores.length; i++) {
       let currentHerbivore = herbivores[i];
       outputString += `<h1>${currentHerbivore.name}</h1>`;
       outputString += `<h3>${currentHerbivore.family}</h3>`;
       list.innerHTML += outputString;
      }
}
//showCarnivores is the callback function
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);