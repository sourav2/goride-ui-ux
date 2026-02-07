const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const button = document.getElementById("loginBtn");
const form = document.getElementById("loginForm");

/* ENABLE BUTTON WHEN INPUTS HAVE VALUE */
function updateButtonState() {
  if (email.value.length > 0 && password.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

email.addEventListener("input", updateButtonState);
password.addEventListener("input", updateButtonState);

/* SUBMIT */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset
  emailError.textContent = "";
  passwordError.textContent = "";
  email.classList.remove("input-error", "input-success");
  password.classList.remove("input-error", "input-success");

  let valid = true;

  // Email validation
  if (!email.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    email.classList.add("input-error");
    valid = false;
  } else {
    email.classList.add("input-success");
  }

  // Password validation
  if (password.value.length === 0) {
    passwordError.textContent = "Password is required";
    password.classList.add("input-error");
    valid = false;
  } else {
    password.classList.add("input-success");
  }

  if (!valid) return;

  // LOADING STATE
  button.textContent = "Logging in...";
  button.disabled = true;

  setTimeout(() => {
    alert("Login successful → Route user based on first-time status");
    button.textContent = "Login";
    form.reset();
    updateButtonState();
  }, 1500);
});