document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".menu-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const header = toggle.closest("header");
      const nav = header.querySelector(".site-nav, .ss-nav-links");
      if (nav) nav.classList.toggle("open");
    });
  });
});
