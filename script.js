"use strict";

function calculateTemp(c) {
  let f = (c * 9) / 5 + 32;

  alert(c + " degrees Converted to f degrees is " + f);
}
let userInput = prompt("What is the temp in C?");
calculateTemp(userInput);
