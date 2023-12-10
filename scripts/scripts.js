// Selecteer een element
var AddListButton = document.querySelector("add-button-saved-houses");
var PopUpAddHouse = document.querySelector("pop-up-hidden");


// Luisteren naar het gebruikers event
AddListButton.addEventListener("click", function() {
    PopUpAddHouse.classList.toggle("pop-up-show");
  });