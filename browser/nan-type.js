"use strict";

myFunction();

function myFunction() {
  let x = 100 / "Apple"; // NaN
  let nanval = isNaN(x); // true
  let typeNan = typeof nanval; // boolean
  let infinity = -2 / 0; // -Infinity
  let infinity2 = 2 / 0; // Inginity
  let infinity3 = 0 / 0; // NaN
  console.log(
    `${x} ${nanval} ${typeNan} ${infinity} ${infinity2} ${infinity3}`
  );
}
