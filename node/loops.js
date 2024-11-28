"use strict";
let count = 0;

for (; count < 1; count++) {
  console.log(count);
}

while (count < 2) {
  console.log(count);
  count++;
}

if (count % 2 == 0) {
  count--;
} else {
  count = 55;
}
console.log(count);

let x = "0";
let text;

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log(text);
console.log(
  'The comparison inside the loop is === (strict). If we added case "0", then it would trigger.'
);
