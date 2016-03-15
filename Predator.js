"use strict";
//predator is a global variable so loadCarnivores is a property within the returned object of predator
let Predator = (function () {
  let herbivores = [];
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
      loader.send();  //send is sending the json file
      loader.addEventListener("load", function () {
        // Set the value of the private array
        console.log(this.responseText); 
        carnivores = JSON.parse(this.responseText).carnivores;//turning json into an object that javascript can manipulate
        //turns json string into an object
        console.log(carnivores);
      cb(carnivores);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
      });
    },
    //another way to write a function
    loadHerbivores: function (callB) {
      //setting up a constructor function XML etc
      //request is defined by variable loader
      let loaderH = new XMLHttpRequest();
      // loader.open tells loader where to go
      loaderH.open("GET", "herbivores.json");
      // loader.send methods of xhr request xml-http request send executes
      loaderH.send();
      loaderH.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText).herbivores;
        console.log(herbivores);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
      callB(herbivores);
      });
    }
   } 
})();
