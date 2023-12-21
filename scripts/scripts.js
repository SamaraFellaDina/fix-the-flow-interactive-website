// Selecteer een element
var AddListButton = document.querySelector(".add-button-saved-houses");
var PopUpAddHouse = document.querySelector(".pop-up");


// Luisteren naar het gebruikers event
AddListButton.addEventListener("click", function() {

    // 3 - Koppelen van een actie classlist en CSS
    PopUpAddHouse.classList.add("pop-up-show");
});



var buttonPopUp = document.querySelector(".pop-up fieldset button");
var PopUpForm1 = document.querySelector(".pop-up-form-1");
var PopUpForm2 = document.querySelector(".pop-up-form-2");

PopUpForm2.classList.add("pop-up-none");

buttonPopUp.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("clicked");
  PopUpForm1.classList.add("pop-up-none");
  PopUpForm2.classList.remove("pop-up-none");
})


var input = document.querySelector(".pop-up fieldset input");
var buttonForm1 = document.querySelector(".pop-up-form-1 button");

input.addEventListener("input", function(e) {
  console.log("hello");
  buttonForm1.classList.add("pop-up-next-step");
});




// input.addEventListener("input", goOn, false);

// function goOn(e) {
//   if (e === "") {
//   console.log(e);
//   buttonForm1.classList.add("pop-up-next-step");

//   }
// }



// Pop-up Stap 2

// var popUpCopyLink = document.querySelector(".pop-up-socials ul div button");

// popUpCopyLink.addEventListener("click" function)


  
// pop-up heading functions
// 1. Selecteren
var popUpClose = document.querySelector(".pop-up-close")

popUpClose.addEventListener("click", function() {
  PopUpAddHouse.classList.add("pop-up-none");
  
})

var popUpCopyLink = document.querySelector(".pop-up-copylink")

popUpCopyLink.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("clicked");
})

// back to step 1

// var popUpBack = document.querySelector(".pop-up fieldset .pop-up-back")

// popUpBack.addEventListener("click", function (e){
//   e.preventDefault();


//   popUpBack.classList.remove();
// })