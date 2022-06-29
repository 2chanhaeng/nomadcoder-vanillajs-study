const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"


function onLoginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    console.log(localStorage.getItem('username'));
    localStorage.setItem('username', username);
}
loginForm.addEventListener("submit", onLoginSubmit);