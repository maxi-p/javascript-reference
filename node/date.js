"use strict";

const date = new Date();
console.log(date);

const origin_year = 1970,
  year = 2016,
  month = 3,
  day = 26,
  hours = 5,
  minutes = 30,
  seconds = 16,
  ms = 500;

console.log(new Date(year, month));
console.log(new Date(year, month, day));
console.log(new Date(year, month, day));
console.log(new Date(year, month, day, hours));
console.log(new Date(year, month, day, hours, minutes));
console.log(new Date(year, month, day, hours, minutes, seconds));
console.log(new Date(year, month, day, hours, minutes, seconds, ms));

const millis =
  ms +
  seconds * 1000 +
  minutes * 60 * 1000 +
  hours * 60 * 60 * 1000 +
  day * 24 * 60 * 60 * 1000 +
  month * 2678400000 +
  (year - origin_year) * 31540000000;

console.log(new Date(millis));
console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toUTCString());

const d1 = new Date("2015-03-25");
const d2 = new Date("2015-03"); // year-month
const d3 = new Date("2015");
const d4 = new Date("03/25/2015"); //MM/DD/YYYY
const d5 = new Date("2015-03-25T12:00:00Z");

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
console.log(d5);

let msec = Date.parse("March 21, 2012"); //converted to millisecs
const d = new Date(msec);
//commas are ignored
let msec2 = Date.parse("March 21 2012 14:00:00");
const d6 = new Date(msec2);

console.log(d);
console.log(d6);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day1 = new Date("2021-03-25");
console.log("fulldate: " + day1);
let mth = months[day1.getMonth()];
let mydate = day1.getDate();
let dy = days[day1.getDay()];
console.log("month: " + mth + " day: " + dy + " date: " + mydate);

let text = "";
const today = new Date();
const updatedDay = new Date();
updatedDay.setFullYear(2100, 0, 29);
if (updatedDay > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);
