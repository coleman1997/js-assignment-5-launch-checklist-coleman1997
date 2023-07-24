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
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All Fields Required");
            event.preventDefault();
        }
        else if (formSubmission(window.document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value) === "invalid") {
            window.alert("Ivalid Input")
            event.preventDefault();
        }
         else {
            formSubmission(window.document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
            event.preventDefault();
        }
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});