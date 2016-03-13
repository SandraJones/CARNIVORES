"use strict";

let Predator = (function () {
  let carnivores = [];
  return {
  	//another way to write a function
    loadCarnivores: function (cb) {
    	//setting up a constructor function XML etc
    	//request is defined by variable loader
      let loader = new XMLHttpRequest();
      // loader.open tells loader where to go
      loader.open("GET", "carnivores.json");
      // loader.send methods of xhr request xml-http request send executes
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        console.log(carnivores);

  cb(carnivores);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
    }
  }
})();

//do the herbivores only diffe is in the return
//loadHerbivores instead of cb(carnivores)