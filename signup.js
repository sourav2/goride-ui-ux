const phone = document.getElementById("phone");
const btn = document.getElementById("sendOtpBtn");

phone.addEventListener("input", () => {
  btn.disabled = phone.value.length !== 10;
});

btn.addEventListener("click", () => {
  window.location.href = "otp.html";
});