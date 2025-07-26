// Navigation toggle functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Form toggle functionality
const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginToggle.addEventListener('click', () => {
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
    signupToggle.classList.add('active');
    loginToggle.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Original login validation (updated)
var user = document.getElementById("loginUsername");
var pass = document.getElementById("loginPassword");
var btn = document.querySelector("#loginBtn");

function checkvalidity() {
    if (user.value == "" || pass.value == "") {
        alert("Please provide Username & Password");
        return false;
    }
    // Add your login logic here
    alert("Login successful! Redirecting...");
    // window.location.href = "index.html";
    return true;
}

btn.addEventListener("click", checkvalidity);

// Sign up validation
const signupBtn = document.getElementById('signupBtn');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const confirmPassword = document.getElementById('confirmPassword');

function checkSignupValidity() {
    if (signupName.value.trim() === "" || 
        signupEmail.value.trim() === "" || 
        signupUsername.value.trim() === "" || 
        signupPassword.value.trim() === "" || 
        confirmPassword.value.trim() === "") {
        alert("Please fill in all fields");
        return false;
    }

    if (signupPassword.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return false;
    }

    if (signupPassword.value.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail.value)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Add your signup logic here
    alert("Account created successfully! Please login.");
    // Switch to login form
    loginToggle.click();
    return true;
}

signupBtn.addEventListener('click', checkSignupValidity);

// Enter key support
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (loginForm.classList.contains('active')) {
            checkvalidity();
        } else if (signupForm.classList.contains('active')) {
            checkSignupValidity();
        }
    }
});