
const toggleButton = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  toggleButton.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
