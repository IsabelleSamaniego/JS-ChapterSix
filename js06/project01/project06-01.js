"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Isabelle Samaniego
      Date:   October 23, 2022

      Filename: project06-01.js
*/

// 3. declare variables
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// 4. create event listener for submitButton
submitButton.addEventListener("click", function() {
    
    // 5.a. if pwd field does not match pattern
    if (pwd.validity.patternMismatch) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } else if (pwd.value != pwd2.value) {
        pwd2.setCustomValidity("Your passwords must match");
    } else {
        pwd.setCustomValidity("");
    }
})