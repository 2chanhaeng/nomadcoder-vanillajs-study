// define events
const h1 = document.querySelector("div.hello:first-child h1");
function handleH1Click(){
    h1.style.color = "blue";
}
function handleMouseEnter(){
    h1.innerHTML = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerHTML = "Mouse is gone!";
}


h1.onclick = handleH1Click;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("Copier!")
}
function handleWindowOffline(){
    alert("SOS no WiFi!")
}
function handleWindowOnline(){
    alert("ALL GOOOOD!")
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);