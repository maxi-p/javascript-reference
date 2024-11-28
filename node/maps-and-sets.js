"use strict";

/* -------------------------------------- */
/* MAP OPERATIONS */
/* -------------------------------------- */

// Javascript set and maps are order preserving but not sorted.
let map = new Map();
// Adding entries
map.set("name", "Alice");
map.set("age", 25);
// Retrieving values
console.log(map.get("name")); // Alice
console.log(map.get("age")); // 25
// Updating values
map.set("age", 26);
console.log(map.get("age")); // 26
console.log(map.has("name")); // true
console.log(map.has("address")); // false
console.log(map.size); // 2
map.delete("age"); // Removes the entry with key 'age'
console.log(map.has("age")); // false

/* -------------------------------------- */
/* MAP TRAVERSING */
/* -------------------------------------- */

console.log("\nMap traversing ways:");
map = new Map();
// Adding entries
map.set("name", "Alice");
map.set("age", 25);

map.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}

for (let key of map.keys()) {
  console.log(`${key} : ${map.get(key)}`);
}

console.log("\nJust iterating the values:");
for (let value of map.values()) {
  console.log(`${value}`);
}
console.log("");

/* -------------------------------------- */
/* SET OPERATIONS */
/* -------------------------------------- */

let set = new Set();
const numbers = new Set([1, 2, 3]);

set.add(1);
set.add(2);
set.add(2); // duplicate will not be added
console.log(set);
console.log(numbers);

set.delete(1);
console.log(set);

console.log(`set has 2: ${set.has(2)}`);
console.log(`set has 3: ${set.has(3)}`);

set.clear();
console.log(set, set.size);

// Traversing the elements in the set
for (const element of numbers) {
  console.log(element);
}

numbers.forEach((element) => {
  console.log(element);
});

// Converting a set to an array
set = new Set([1, 2, 3, 4, 3, 2, 1]);
const array = [...set];
console.log(set);
console.log(array);
