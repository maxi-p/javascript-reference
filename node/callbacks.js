"use strict";

function outputResults(res) {
  console.log(res);
}

function calculateSum(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

calculateSum(5, 5, outputResults);
