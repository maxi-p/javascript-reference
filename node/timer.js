"use strict";

console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds.");
}, 2000);

let count = 0;

const intervalId = setInterval(() => {
  console.log(`Count is: ${count++}`);

  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);

console.log("End");
