"use strict";

/* -------------------------------------- */
/* FUNCTION SCOPES */
/* -------------------------------------- */

function outerFunction(outerVar) {
  // This is an outer function
  console.log("Outer function:", outerVar);
  function innerFunction(innerVar) {
    // This is an inner function
    console.log("Inner function:", innerVar);
    console.log("Outer function variable:", outerVar);
  }
  // Calling the inner function
  innerFunction("Inside parameter");
}
outerFunction("Outside parameter");

/* -------------------------------------- */
/* FUNCTION CLOSURE */
/* -------------------------------------- */

// Closure is when an inner function has access to variables of it's outer function
// even when the outer function finished execution
function outer() {
  let count = 0;
  function inner() {
    count += 1;
    console.log(count);
  }

  return inner;
}

const inner = outer();
inner();
inner();

/* -------------------------------------- */
/* FUNCTION APPLIER PATTERN */
/* -------------------------------------- */

// Step functions to process data
const validateData = (data) => {
  if (data && data.length > 0) {
    console.log("Data is valid.");
    return data;
  } else {
    console.log("Data is invalid.");
    return false;
  }
};
const processData = (data) => {
  console.log("Processing data: ", data);
  if (data !== false) {
    data = data.toUpperCase();
  }
  return data;
};
const save = (data) => {
  if (data !== false) {
    console.log("Data saved:", data);
  }
};

const applier = (func) => {
  data = func(data); //modifies the data
};

// Workflow actions stored in an array
const workflow = [validateData, processData, save];

let data = "Sample Data"; // Data to process
workflow.forEach(applier);

data = "";
workflow.forEach(applier);
