const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");
const mainConatiner = document.querySelector(".app-container");

signupBtn.addEventListener("click", () => {
    mainConatiner.classList.add("change");
});

signinBtn.addEventListener("click", () => {
    mainConatiner.classList.remove("change");
});