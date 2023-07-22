// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty";
   }
   if (isNaN(testInput)){
    return "Not a Number";
   } else return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   document = this.document;
   list = document.getElementById("faultyItems");
   pilot = document.querySelector("input[name=pilotName]");
   copilot = document.querySelector("input[name=copilotName]");
   fuelLevel = document.querySelector("input[name=fuelLevel]");
   cargoLevel = document.querySelector("input[name=cargoMass]");
   launchStatus = document.getElementById("launchStatus");
   fuelStatus = document.getElementById("fuelStatus");
   cargoStatus = document.getElementById("cargoStatus");
 
   // make sure all fields are entered

   if(validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"){
    window.alert("All Fields Required");
    
   } 
   console.log(pilot.value);
   // set pilots names
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   pilotStatus.innerHTML = `${pilot.value} is ready for launch`;
   copilotStatus.innerHTML = `${copilot.value} is ready for launch`;
   // checks fuel level and cargo mass and sets display 
   if(fuelLevel.value < 10000 && fuelLevel.value != ""){
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    fuelStatus.innerHTML = "Not enough fuel for the journey";
    launchStatus.style.color = "red";
   } 
   if(cargoLevel.value > 10000 && cargoLevel.value != ""){
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
    launchStatus.style.color = "#C7254E";
   } 

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
