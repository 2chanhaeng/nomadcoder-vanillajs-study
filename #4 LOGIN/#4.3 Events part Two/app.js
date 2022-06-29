const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");


function onLoginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    console.log(username);
    console.log(info);
}
loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a")

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    alert("clicked!");
}

link.addEventListener("click", handleLinkClick);