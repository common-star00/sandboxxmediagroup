const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a, .contact-trigger").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

const contactPanel = document.getElementById("contactPanel");
const contactButtons = document.querySelectorAll("[data-contact-toggle]");

contactButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (contactPanel) {
      contactPanel.classList.toggle("open");

      if (contactPanel.classList.contains("open")) {
        setTimeout(() => {
          contactPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
