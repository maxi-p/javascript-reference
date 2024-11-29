"use strict";

function displayOutput(res) {
  console.log(res);
}

function handleError(err) {
  console.log(`Error: ${err}`);
}

const myPromise = new Promise((accept, reject) => {
  let x = 0;

  if (x == 0) {
    accept("Ok!");
  } else {
    reject("Error!");
  }
});

myPromise.then(displayOutput, handleError);
