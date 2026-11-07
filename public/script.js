// ===== 1. Dark / light mode toggle =====
const themeButton = document.getElementById("theme-toggle");

// Apply the theme saved from the last visit
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ===== 2. Mobile menu =====
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", open);
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuButton.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// Close the menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// ===== 3. Reveal sections when they scroll into view =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== 4. Project card glow that follows the mouse =====
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--y", `${event.clientY - rect.top}px`);
  });
});

// ===== 5. Footer year updates automatically =====
document.getElementById("year").textContent = new Date().getFullYear();
