"use strict";

/* -------------------------------------- */
/* STRINGS (MOSTLY LIKE IN JAVA) */
/* -------------------------------------- */

let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
// text is a template string
console.log(text.length);
text = "Please locate me";
console.log(text.search("locate")); // 7

/* -------------------------------------- */
/* NEW KEYWORD PITFALL (LIKE IN JAVA) */
/* -------------------------------------- */

let name1 = new String("John");
let name2 = "John";
console.log(name1 === name2); //false

/* -------------------------------------- */
/* ACCESSING CHARACTERS OF A STRING */
/* -------------------------------------- */

text = "John";
console.log(text.charAt(1) + text.at(1) + text[1]);
// at() is ES2022

console.log(text.charAt(10)); // empty string ("")
console.log(text.at(10)); // undefined
console.log(text[10]); // undefined

// at() supports nevative indecies, while charAt doesn't
console.log(text.at(-1));
console.log(text.charAt(-1)); // empty string ("") as in not found

try {
  text[1] = "R"; // throws an error because [] is read only in strngs. They are immutable
} catch (e) {
  console.log(e);
}

/* -------------------------------------- */
/* SLICE, SUBSTRING, SUBSTR */
/* -------------------------------------- */

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);
let part3 = str.slice(7, 13); // [7,13)
console.log(part3);
let part2 = str.substr(7, 6); // second argument is number of characters in substr()
console.log(part2);

/* -------------------------------------- */
/* OTHER FUNCTIONS */
/* -------------------------------------- */

let fruits = "Apple,Banana,Kiwi";
console.log(fruits);
str = fruits.replaceAll("Kiwi", "Plum"); //replaces all occurences
console.log(str);
let splitted = str.split(","); //returns a string array
console.log(splitted);
let result = splitted[0].repeat(4); //repeats the string
console.log(result);
let text1 = " Hello World! ";
console.log(text1);
let text2 = text1.trim(); // trims the left and right
console.log(text2);
let text3 = text1.trimEnd(); //trims the right
console.log(text3);
let text4 = text1.trimStart(); //trims the left
console.log(text4);
