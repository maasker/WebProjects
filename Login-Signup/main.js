const wrapper = document.querySelector(".wrapper"),
signupHeader = document.querySelector(".signup header"),
loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
wrapper.classList.remove("active");
});

const signupBtn = document.querySelector("#signup-btn");
signupBtn.addEventListener("click", (event) => {
event.preventDefault();
const accountType = document.querySelector('input[name="account_type"]:checked').value;
const fullName = document.querySelector('input[placeholder="Full name"]').value;
const email = document.querySelector('input[placeholder="Email address"]').value;
const password = document.querySelector('input[placeholder="Password"]').value;
const terms = document.querySelector('#signupCheck').checked;

if (fullName.trim() === '') {
  alert('Please enter your full name');
} else if (email.trim() === '') {
  alert('Please enter your email address');
} else if (password.trim() === '') {
  alert('Please enter a password');
} else if (!terms) {
  alert('Please accept the terms and conditions');
} else {
  if (accountType === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "client.html";
  }
}
});

const loginBtn = document.querySelector("#login-btn");
document.getElementById("login-btn").addEventListener("click", function(event) {
event.preventDefault();
window.location.href = "admin.html";
});