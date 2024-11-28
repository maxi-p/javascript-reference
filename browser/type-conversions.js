"use strict";

// String to number conversion
let someStr = "3";
let converted = someStr * 1;

let convertedAgain = converted + "";

console.log(
  `${converted}: ${typeof converted}, ${convertedAgain}: ${typeof convertedAgain}`
);

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

console.log(
  `Parsed with Number.parseInt(str) - Number.isInterger: ${Number.isInteger(
    Number.parseInt("4")
  )}`
);

let x = 3.14159265358978323846 * 1.49845254;
document.writeln(`${x.toPrecision()}</br>`);
document.writeln(`${x.toPrecision(2)}</br>`);
document.writeln(`${x.toPrecision(4)}</br>`);
document.writeln(`${x.toPrecision(10)}</br>`);
