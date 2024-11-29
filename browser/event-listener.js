"use strict";

function buttonClicked(buttonEl) {
  console.log(buttonEl);
  alert("Button was clicked!");
}

const button1 = document.getElementById("button1");
button1.addEventListener("click", buttonClicked);

const button2 = document.getElementById("button2");

button2.addEventListener("click", (event) => {
  console.log(
    `Button clicked at coordinates: (${event.clientX}, ${event.clientY})`
  );
  const rect = button2.getBoundingClientRect(); // Get button's position
  const relativeX = event.clientX - rect.left; // X relative to button
  const relativeY = event.clientY - rect.top; // Y relative to button
  console.log(`Coordinates relative to button: (${relativeX}, ${relativeY})`);
});
