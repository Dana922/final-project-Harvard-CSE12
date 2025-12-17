// public/scripts/nav.js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-site-header]");
  const toggleBtn = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (!header || !toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      header.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
});
