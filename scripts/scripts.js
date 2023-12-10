// Selecteer een element
var AddListButton = document.querySelector(".add-button-saved-houses");
var PopUpAddHouse = document.querySelector(".pop-up-hidden");


// Luisteren naar het gebruikers event
AddListButton.addEventListener("click", function() {

    // 3 - Koppelen van een actie classlist en CSS
    PopUpAddHouse.classList.toggle("pop-up-show");
  });