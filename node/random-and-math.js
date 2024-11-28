"use strict";

/* -------------------------------------- */
/* RANDOM */
/* -------------------------------------- */

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive): [0,1)
// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));
//create random number between [min, max)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(4, 7));

/* -------------------------------------- */
/* MATH */
/* -------------------------------------- */

let ninety = Math.PI / 2;
console.log(Math.sin(ninety)); // 0
console.log(Math.cos(ninety)); // 0
console.log("Square root of 25 is " + Math.sqrt(25));
console.log("Cubic root of 27 is " + Math.cbrt(27));
console.log("maximum of 2,4,1 is " + Math.max(2, 4, 1));
console.log("minimum of 2,4,1 is " + Math.min(2, 4, 1));
console.log("math.E " + Math.E);
console.log(Math.trunc(8.76) + Math.E); // truncate just removes all things after the . and leaves the whole part
