"use strict";

let y = 4;

console.log(y == 4); // true
console.log(y === 4); // true
console.log(y == "4"); // true // JS will convert "4" to 4
console.log(y === "4"); // false
console.log(y != 4); // false
console.log(y !== 4); // false
console.log(y != "4"); // false
console.log(y !== "4"); // true

console.log(isNaN("string"));

let age = Number(23);
if (isNaN(age)) {
  console.log("Input is not a number");
} else {
  age < 21 ? console.log("Too young") : console.log("Old enough");
}

// do not create new Boolean object, they can lead to unexpected behavior
let bool = false;
let Bool = new Boolean(false);
document.writeln(`false == new Boolean(false): ${bool == Bool}</br>`); // true
document.writeln(`false === new Boolean(false): ${bool === Bool}</br>`); // false
