// Write your JavaScript code here!




window.addEventListener("load", function() {
    
    

    let list = document.getElementById("faultyItems");

    list.style.visibility = "hidden";

    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");


    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
            alert("All Fields Required");
            event.preventDefault();
        }
        else if (formSubmission(window.document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value) === "invalid") {
            window.alert("Invalid Input")
            event.preventDefault();
        }
        else {
            formSubmission(window.document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
            event.preventDefault();
        }
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal txo the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       let destination = document.getElementById("missionTarget");
       addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.moons, pickedPlanet.image)
       destination.innerHTML = `<h2>Mission Destination</h2>
       <ol>
           <li>Name: ${pickedPlanet.name}</li>
           <li>Diameter: ${pickedPlanet.diameter}</li>
           <li>Star: ${pickedPlanet.star}</li>
           <li>Distance from Earth: ${pickedPlanet.distance}</li>
           <li>Number of Moons: ${pickedPlanet.moons}</li>
       </ol>
       <img src="${pickedPlanet.image}">`
   })
   
});