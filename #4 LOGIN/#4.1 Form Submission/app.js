const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginButtonClick() {
    const username = loginInput.value;
    console.log(username)
}
loginButton.addEventListener("click", handleLoginButtonClick);