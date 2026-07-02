const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (links && links.classList.contains("is-open")) {
      links.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });
});

const form = document.querySelector("[data-enquiry-form]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject") || "Sora Sushi Bar enquiry");
    const body = encodeURIComponent(
      [
        "Name: " + (data.get("name") || ""),
        "Email: " + (data.get("email") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Order or enquiry: " + (data.get("message") || "")
      ].join("\n")
    );
    window.location.href = "mailto:goodmanseo.sydney@gmail.com?subject=" + subject + "&body=" + body;
  });
}
