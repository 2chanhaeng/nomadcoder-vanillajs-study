const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    console.log(username);
    console.log(info);
}
loginForm.addEventListener("submit", onLoginSubmit);