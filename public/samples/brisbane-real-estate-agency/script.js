const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const dropdowns = Array.from(document.querySelectorAll("[data-dropdown]"));

function closeDropdowns(except) {
  dropdowns.forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove("is-open");
    const button = dropdown.querySelector("button");
    if (button) button.setAttribute("aria-expanded", "false");
  });
}

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    if (!open) closeDropdowns();
  });
}

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector("button");
  if (!button) return;
  button.addEventListener("click", () => {
    const open = !dropdown.classList.contains("is-open");
    closeDropdowns(dropdown);
    dropdown.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
  });
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  if (!event.target.closest("[data-dropdown]")) closeDropdowns();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDropdowns();
});

const form = document.querySelector("[data-enquiry-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject") || "Real estate enquiry");
    const body = encodeURIComponent([
      "Name: " + (data.get("name") || ""),
      "Email: " + (data.get("email") || ""),
      "Phone: " + (data.get("phone") || ""),
      "Property suburb: " + (data.get("suburb") || ""),
      "Message: " + (data.get("message") || "")
    ].join("\n"));
    window.location.href = "mailto:goodmanseo.sydney@gmail.com?subject=" + subject + "&body=" + body;
  });
}
