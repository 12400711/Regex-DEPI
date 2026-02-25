const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

const bar = document.getElementById("bar");
const strengthText = document.getElementById("strengthText");

// Regex Patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.(com|org|net)$/i;
const phonePattern = /^01[0125][0-9]{8}$/; // Egypt numbers
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

// ================= EMAIL =================
email.addEventListener("input", () => {
  const error = document.getElementById("emailError");
  if (!emailPattern.test(email.value)) {
    error.textContent = "Invalid email";
  } else {
    error.textContent = "";
  }
});

// ================= PHONE =================
phone.addEventListener("input", () => {
  const error = document.getElementById("phoneError");
  if (!phonePattern.test(phone.value)) {
    error.textContent = "Invalid Egyptian phone";
  } else {
    error.textContent = "";
  }
});

// ================= PASSWORD STRENGTH =================
password.addEventListener("input", () => {
  const val = password.value;
  let strength = 0;

  if (val.match(/[a-z]/)) strength++;
  if (val.match(/[A-Z]/)) strength++;
  if (val.match(/\d/)) strength++;
  if (val.match(/[@#$%^&*!]/)) strength++;
  if (val.length >= 8) strength++;

  updateStrength(strength);
});

function updateStrength(level) {
  if (level <= 2) {
    bar.style.width = "30%";
    bar.style.background = "#ef4444";
    strengthText.textContent = "Weak ❌";
  } 
  else if (level <= 4) {
    bar.style.width = "60%";
    bar.style.background = "#facc15";
    strengthText.textContent = "Medium ⚠️";
  } 
  else {
    bar.style.width = "100%";
    bar.style.background = "#22c55e";
    strengthText.textContent = "Strong ✅";
  }
}

// ================= FORM SUBMIT =================
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    emailPattern.test(email.value) &&
    phonePattern.test(phone.value) &&
    passwordPattern.test(password.value)
  ) {
    alert("Form Valid ✅");
  } else {
    alert("Please fix errors ❌");
  }
});