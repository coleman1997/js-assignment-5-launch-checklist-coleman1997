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
   if (testInput === "" || typeof testInput !== "string"){
    return "Empty";
   }
   else if (isNaN(testInput)){
    return "Not a Number";
   } else return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   let launchStatus = document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

    

   // set pilots names
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   // checks fuel level and cargo mass and sets display 
   
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    return "invalid"
    }
   else if(fuelLevel < 10000 && cargoLevel <= 10000){
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
   } 
   else if(cargoLevel > 10000 && fuelLevel >= 10000){
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    launchStatus.style.color = "#C7254E";
   } else if (cargoLevel > 10000 && fuelLevel < 10000){
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.style.color = "#C7254E";
   } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
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
