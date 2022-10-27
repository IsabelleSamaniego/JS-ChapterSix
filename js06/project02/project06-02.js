"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Isabelle Samaniego
      Date:   Ocotber 26, 2022

      Filename: project06-02.js
*/


// 3. add an event listener that runs an anonymous function when the page loads
window.addEventListener("load", function() {

    // 4. add a statement that uses the querySelectorAll() method to create
    // a node list of all elements matching the CSS selector form#govLinks select
    // Store the node list in the allSelect variable
    let allSelect = document.querySelectorAll("form#govLinks select");

    // 5. for loop that iterates through all of the contents of the allSelect node
    for (let i=0; allSelect.length; i++) {

        // 5.a. add onchange event handler
        allSelect[i].onchange = function(evt) {

            // 5.b. retrieve he value property of evt.target
            // store it in the linkURL variable
            let linkURL = evt.target.value;

            // 5.c. use window.open() method to open a new browser with linkURL
            // store the window under newWin variable
            let newWin = window.open(linkURL);
        }
    }
});