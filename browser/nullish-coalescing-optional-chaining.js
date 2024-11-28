"use strict";

let nullName = null;
let nonNullText = "qwerty";
let coalResult = nullName ?? nonNullText;
console.log(`nullName (nullish): ${nullName}`);
console.log(`nonNullText: ${nonNullText}`);
console.log(`coalResult (coalescing): ${coalResult}`);

const nonNullCar = { type: "Fiat", model: "500", color: "white" };
console.log(`nonNullCar.model: ${nonNullCar?.model}`); // optional chaining. if null, will give undefined, if not then will give the attribute
console.log(`nonNullCar.name: ${nonNullCar?.name}`);
console.log(`null?.name: ${null?.name}`);
