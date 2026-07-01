const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

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