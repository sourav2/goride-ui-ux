const inputs = document.querySelectorAll(".otp-boxes input");
const btn = document.getElementById("verifyBtn");

inputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    if (input.value && inputs[i + 1]) {
      inputs[i + 1].focus();
    }
  });
});

btn.addEventListener("click", () => {
  window.location.href = "profile.html";
});