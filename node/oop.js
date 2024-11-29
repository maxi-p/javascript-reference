"use strict";

/* -------------------------------------- */
/* CLASSES */
/* -------------------------------------- */

class Car {
  // JS will add an empty constructor if don't specified
  // can only define one constructor
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const car = new Car("Toyota", 2016);
console.log(car.age());
console.log(car);

// Cannot be a lambda
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const person1 = new Person("Max", "Petrushin", 21);
console.log(person1);

/* -------------------------------------- */
/* OBJECTS */
/* -------------------------------------- */

// Create an Object
const person = {};
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
console.log(person); //50

// Comparing objects: only references are compared
const person3 = { a: 1 };
const person4 = { a: 1 };

console.log(person3 == person4);
console.log(person3 === person4);

const person5 = person3;

console.log(person3 == person5);
console.log(person3 === person5);

/* -------------------------------------- */
/* PROTOTYPES */
/* -------------------------------------- */

// 2 main ways to create object with a prototype:
const personPrototype = {
  greet: () => {
    console.log("hello!");
  },
  bye() {
    console.log("bye!");
  },
};

const carl = Object.create(personPrototype);
carl.greet();

function Person1(name) {
  this.name = name;
}

Object.assign(Person1.prototype, personPrototype);
const jay = new Person1("jay");
jay.greet();
jay.bye();

/* -------------------------------------- */
/* GETTERS AND SETTERS */
/* -------------------------------------- */

class Car1 {
  #carName; // Private field for car name
  carYear; // Public (without an #)
  constructor(brand, year) {
    this.#carName = brand;
    this.carYear = year;
  }
  get carName() {
    return this.#carName;
  }
  set carName(x) {
    this.#carName = x;
  }
  get carYear() {
    return this.carYear;
  }
  set carYear(x) {
    this.carYear = x;
  }
}
const myCar = new Car1("Ford", 2016);
// myCar.#carName = "Volvo"; // cannot write to private
myCar.carName = "Toyota";
console.log(myCar.carName);
// console.log(myCar.#carName); // cannot read private

myCar.carYear = 2016;
console.log(myCar.carYear);

/* -------------------------------------- */
/* STATIC METHODS */
/* -------------------------------------- */

class Animal {
  constructor(name) {
    this.name = name;
  }

  static hello() {
    // this.name here will be undefined
    return "Hello";
  }
}

const animal = new Animal("animal");
console.log(Animal.hello());

/* -------------------------------------- */
/* OBJECT VS MAP */
/* -------------------------------------- */

// 1. Key Types: Map can have any object as key, while objects can only have strings or symbols as keys
// 2. Order: In map is preserved, but in object may vary
// 3. Size retrieval: in map it's .size property, in object it's Object.keys().length
// 4. Iteration: Map supports direct iteration like arrays, but object requires Object.entries()

const person2 = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const fruits = new Map([
  ["apples", 500],
  ["bannanas", 300],
  ["oranges", 200],
]);

console.log(typeof person2);
console.log(typeof fruits);

const keys = Object.keys(person2);
console.log(keys, `Length: ${keys.length}`);

const values = Object.values(person2);
console.log(values, `Length: ${values.length}`);

for (const [key, value] of Object.entries(person2)) {
  console.log(`${key} : ${value}`);
}

const entriesArray = [
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
];

// Object.fronEntries(obj) creates an object from a list of key-value pairs
// Converting map objects or arrays of key-value pairs to objects
const person6 = Object.fromEntries(entriesArray);
console.log(person6, person2);

/* -------------------------------------- */
/* INHERITANCE */
/* -------------------------------------- */

class Beast {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `I am ${this.name}`;
  }
}

// use extends keyword for inheritance
class Human extends Beast {
  constructor(name, lastname) {
    super(name);
    this.lastname = lastname;
  }

  greet() {
    return `${super.greet()} ${this.lastname}`;
  }
}

let human = new Human("Max", "Petrushin");
console.log(human.greet());
