// control HTML elements by js 
const title = document.querySelector("div.hello:first-child h1");
console.log(title);
title.style.color = "blue";

// listen events
function handleTitleClick(){
    console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);
