"use strict";

let text = `
  {
    "employees" : [
      {
        "firstName" : "John",
        "lastName" : "Doe"
      },
      {
        "firstName" : "Anna",
        "lastName" : "Smith"
      },
      {
        "firstName" : "Peter",
        "lastName" : "Jones"
      }
    ]
  }
`;

const obj = JSON.parse(text);
console.log(obj);

const json = JSON.stringify(obj);
console.log(json);
