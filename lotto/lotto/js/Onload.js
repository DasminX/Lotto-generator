"use strict";
const navElement = document.querySelector("nav"); // Nav element

const buttons = document.querySelectorAll(".button"); // Buttons

const fields = document.querySelectorAll(".field"); // All fields on page below

// Displaying loading effect, then after one second displaying main page
setTimeout(() => {
  navElement.classList.add("active");
  for (const button of buttons) button.hidden = false;
  for (const field of fields) field.classList.add("visible");
}, 1800);
