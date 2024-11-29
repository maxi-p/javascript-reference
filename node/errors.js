"use strict";

let num = 1;
try {
  num.toPrecision(500);
} catch (err) {
  console.log("Name: " + err.name + " Message: " + err.message);
}
