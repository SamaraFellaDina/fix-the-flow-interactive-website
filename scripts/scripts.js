// Selecteer een element
var AddListButton = document.querySelector(".add-button-saved-houses");
var PopUpAddHouse = document.querySelector(".pop-up");


// Luisteren naar het gebruikers event
AddListButton.addEventListener("click", function() {

    // 3 - Koppelen van een actie classlist en CSS
    PopUpAddHouse.classList.toggle("pop-up-show");
});


var button = document.querySelector(".pop-up fieldset button")
var popUpStepone = document.querySelector("stap-1")
var popUpStepTwo = document.querySelector("stap-2")

button.addEventListener("click", function(){
  console.log("click button")
  popUpStepone.classList.add("pop-up-hidden");
  button.classList.add(popUpStepTwo)
})