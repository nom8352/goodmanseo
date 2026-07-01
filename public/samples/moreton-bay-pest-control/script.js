const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const dropdowns = document.querySelectorAll(".nav-dropdown");
dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".nav-dropdown-toggle");
  const submenuLinks = dropdown.querySelectorAll(".nav-submenu a");
  if (!button) return;

  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const open = dropdown.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });

  submenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      if (links && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      }
    });
  });
});

document.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    if (dropdown.contains(event.target)) return;
    const button = dropdown.querySelector(".nav-dropdown-toggle");
    dropdown.classList.remove("is-open");
    button?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".nav-dropdown-toggle");
    dropdown.classList.remove("is-open");
    button?.setAttribute("aria-expanded", "false");
  });
});

const form = document.querySelector("[data-enquiry-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject") || "Sample site enquiry");
    const body = encodeURIComponent(
      ["Name: " + (data.get("name") || ""), "Email: " + (data.get("email") || ""), "Phone: " + (data.get("phone") || ""), "Message: " + (data.get("message") || "")].join("\n")
    );
    window.location.href = "mailto:goodmanseo.sydney@gmail.com?subject=" + subject + "&body=" + body;
  });
}
