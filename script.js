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

function sendSandboxEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const service = document.getElementById("service")?.value || "General Inquiry";
  const subject = document.getElementById("subject")?.value || `SandboxX Inquiry - ${service}`;
  const message = document.getElementById("message")?.value || "";

  const body = `
Name: ${name}
Email: ${email}
Service Needed: ${service}

Message:
${message}
  `;

  window.location.href =
    `mailto:sdbx@sandboxxmediagroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


// Highlight the current page in the navigation and improve mobile menu behaviour.
document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active-link");
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
