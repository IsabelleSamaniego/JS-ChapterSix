"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Isabelle Samaniego
      Date:   October 26, 2022

      Filename: project06-03.js
*/

// CANNOT SUBMIT FORM UNTIL ALL DATA FIELDS ARE COMPLETE
// EXCEPT THE SECOND ADDRESS FIELD
// VALIDATION ERRORS APPEAR IN THE ERROR BOX BELOW THE FORM

// 3. declare useShip to reference element with the id "useShip"
let useShip = document.getElementById("useShip");

// add an event listener to useShip to run the copyShippingToBilling() function when clicked
useShip.addEventListener("click", copyShippingToBilling);

// 4. create the copyShippingToBilling() function that copies values 
// from the shipping fields to corresponding billing fields
function copyShippingToBilling() {

    // if statement to test whether useShip is checked
    if (useShip.checked == true) {

    // 4.a. set the value of firstnameBill field to the value of firstnameShip field
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("stateBill").value = document.getElementById("stateShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;

    // 4.c. set the selectedIndex property of the stateBill field to the value 
    // of the selectedIndex property of the stateShip field.
    let stateBill = stateShip.selectedIndex.value;

    };
}

// 5.a. declare formElements
let formElements = document.querySelectorAll("input[type='text']:selected");

// 5.b. declare the fieldCount
let fieldCount = formElements.length;

// 5.c. declare errorBox
let errorBox = document.getElementById("errorBox");

// 6. a for loop that iterates through each element in the formElements node list
for (i=0; i < formElements; i++) {
    document.formElements[i].addEventListener("click", showValidationError);
}

// 7. create showValidationError(evt)
function showValidationError(evt) {

    // 7.a. apply preventDefault method to evt object
    evt.preventDefault();

    // 7.b. set the textContent property of errorBox to the text string “Complete all highlighted fields”.
    errorBox.textContent="Complete all highlighted fields";
}