const title = document.getElementById("something"); // null
title.innerText = "Got you!"; // error

// Get Element by class or tag name
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title = document.getElementsByTagName("h1");
console.log(title);

// Query Selector
const title = document.querySelector(".hello h1"); // Get the only first one
const title = document.querySelectorAll(".hello h1"); // Get every elems as array
const title = document.querySelector(".hello h1:first-child"); // Get an elem by CSS selector
