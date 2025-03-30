function checkStrength() {
  const pwd = document.getElementById("password").value;
  const bar = document.getElementById("strengthBar");
  const text = document.getElementById("strengthText");

  let strength = 0;
  if (pwd.length >= 6) strength++;
  if (/[A-Z]/.test(pwd)) strength++;
  if (/[0-9]/.test(pwd)) strength++;
  if (/[^A-Za-z0-9]/.test(pwd)) strength++;

  let colors = ["#ff4d4d", "#ff944d", "#ffd11a", "#99e600", "#00cc44"];
  let messages = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];

  bar.style.background = colors[strength];
  bar.style.width = (strength + 1) * 20 + "%";
  text.innerText = "Strength: " + messages[strength];
}
