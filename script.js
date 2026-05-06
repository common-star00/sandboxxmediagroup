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
  const subject = document.getElementById("subject")?.value || "SandboxX Media Inquiry";
  const message = document.getElementById("message")?.value || "";
  const body = `Name: ${name}
Email: ${email}

Message:
${message}`;
  window.location.href = `mailto:sdbx@sandboxxmediagroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
