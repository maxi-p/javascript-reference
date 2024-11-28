"use strict";

/* -------------------------------------- */
/* PUSHING AND POPPING (END OF THE ARRAY) */
/* -------------------------------------- */

let fruits = [];
fruits = ["Banana", 1, true, "2"];

fruits[1] = "Plum";
console.log(fruits, `length: ${fruits.length}`);

delete fruits[0];
console.log(fruits[0]);
console.log(fruits, `length: ${fruits.length}`);

fruits.push("Pear");
console.log(fruits, `length: ${fruits.length}`);

let lastElement = fruits.pop();
console.log(
  fruits,
  `length: ${fruits.length} and popped element is: ${lastElement}`
);

/* -------------------------------------- */
/* TRAVERSING THE ARRAY */
/* -------------------------------------- */

const constFruits = ["Banana", "Orange", "Apple", "Mango"];
constFruits.forEach(printElement);
function printElement(element) {
  console.log(element);
}

for (let i = 0; i < constFruits.length; i++) {
  console.log(constFruits[i]);
}

constFruits[6] = "Lemon";
for (const el of constFruits) {
  console.log(el);
}

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";

cars.push("Audi");
// cars = [12, 15, 19]; // This will throw
console.log(cars);

const arr = [40];
const newArr = new Array(40);
console.log(arr, arr.length);
console.log(newArr, newArr.length);

let tools = ["hammer", "chain", "knife"];
tools.sort(); // sorting the array

console.log(tools);
console.log(
  `tools.at(-1) : ${tools.at(-1)}, same as last element: ${
    tools.at(-1) == tools.at(tools.length - 1)
  }`
);

let joined = tools.join(" - ");
console.log(joined);

/* -------------------------------------- */
/* SHIFTING AND UNSHIFTING (REMOVING AND ADDING FROM AND TO THE TOP OF THE ARRAY) */
/* -------------------------------------- */

let tools1 = tools.shift(); // removed first element
console.log(tools, `After element ${tools1} was removed`);

let newLen = tools.unshift("gear");
console.log(tools, `New length: ${newLen}`);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

/* -------------------------------------- */
/* FLATTENING AND MAPPING THE ARRAY */
/* -------------------------------------- */

const flatArr = myArr.flat();
console.log(flatArr);

function doubleFunc(x) {
  return [x, x * 2];
}

let mappedArr = flatArr.map(doubleFunc);
console.log(mappedArr);

let flatMappedArr = flatArr.flatMap(doubleFunc);
console.log(flatMappedArr, `length: ${flatMappedArr.length}`);

/* -------------------------------------- */
/* SPLICING THE ARRAY (DELETING NON-EDGE ELEMENTS AND SPLICING) */
/* -------------------------------------- */

let array = [1, 2, 3, 4, 5];
// remove starting from index 2, 1 item (item 3)
console.log(
  "removed items are: ",
  array.splice(2, 1),
  "as the result array: ",
  array
);

// removes all starting from index 2
console.log(
  "removed items are: ",
  array.splice(2),
  "as the result array: ",
  array
);

/* -------------------------------------- */
/* RETURNING A SLICED ARRAY (LIKE SUBSTRING IN JAVA) */
/* -------------------------------------- */

array.push(3, 2, 4);
console.log("Initial array: ", array);
// slice is like substring in Java
console.log(
  "slice of that array is: ",
  array.slice(2),
  "as the result array: ",
  array
); // shows the last elements starting at index 2 (3,2,4)

// -index counts indecies from the end
console.log(
  "slice of that array is: ",
  array.slice(-3),
  "as the result array: ",
  array
); // shows the last elements starting at the 3rd to last index (3,2,4)

// second argument is the ending index
console.log(
  "slice of that array is: ",
  array.slice(2, 4),
  "as the result array: ",
  array
); // shows the elements starting at the 2nd inclusively to the 4th index exclusively (3, 2)

/* SEARCHING ELEMENTS WITHIN THE ARRAY */
fruits = ["Apple", "Orange", "Mango", "Apple", "Banana"];
let firstPosition = fruits.indexOf("Apple");
let lastPosition = fruits.lastIndexOf("Apple");
console.log(
  `Index of the first occurance of "Apple" is: ${firstPosition}, and the index of the last occurance is: ${lastPosition}`
);

let numbers = [2, 4, 14, 25, 29];

function findBigger(value, index, array) {
  console.log(index, array);
  return value > 18;
}

let firstElement = numbers.find(findBigger);
let firstElementIndex = numbers.findIndex(findBigger);
console.log(`${firstElement} is at index: ${firstElementIndex}`);

/* -------------------------------------- */
/* MULTIDIMENSIONAL ARRAY */
/* -------------------------------------- */

const twodimarr = [
  [1, 2, 3, 4],
  [4, 5],
  [7, 8, 9],
];

for (let i = 0; i < twodimarr.length; i++) {
  for (let j = 0; j < twodimarr[i].length; j++) {
    console.log(twodimarr[i][j]);
  }
}
