const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const dropdowns = Array.from(document.querySelectorAll("[data-dropdown]"));
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const closeTimers = new WeakMap();

function isDesktopNav() {
  return window.matchMedia("(min-width: 1041px)").matches;
}

function clearCloseTimer(dropdown) {
  const timer = closeTimers.get(dropdown);
  if (timer) window.clearTimeout(timer);
  closeTimers.delete(dropdown);
}

function closeDropdown(dropdown) {
  const button = dropdown.querySelector(".nav-dropdown-toggle");
  clearCloseTimer(dropdown);
  dropdown.classList.remove("is-open");
  if (button) button.setAttribute("aria-expanded", "false");
}

function closeAllDropdowns(except) {
  dropdowns.forEach((dropdown) => {
    if (dropdown !== except) closeDropdown(dropdown);
  });
}

function openDropdown(dropdown) {
  const button = dropdown.querySelector(".nav-dropdown-toggle");
  clearCloseTimer(dropdown);
  closeAllDropdowns(dropdown);
  dropdown.classList.add("is-open");
  if (button) button.setAttribute("aria-expanded", "true");
}

function scheduleCloseDropdown(dropdown) {
  clearCloseTimer(dropdown);
  closeTimers.set(dropdown, window.setTimeout(() => closeDropdown(dropdown), 200));
}

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    if (!open) closeAllDropdowns();
  });
}

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".nav-dropdown-toggle");
  const menuLinks = dropdown.querySelectorAll(".nav-dropdown a");

  if (canHover) {
    dropdown.addEventListener("pointerenter", () => {
      if (isDesktopNav()) openDropdown(dropdown);
    });
    dropdown.addEventListener("pointerleave", () => {
      if (isDesktopNav()) scheduleCloseDropdown(dropdown);
    });
  }

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (dropdown.classList.contains("is-open")) {
        closeDropdown(dropdown);
      } else {
        openDropdown(dropdown);
      }
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeDropdown(dropdown);
      if (links && toggle && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (!target.closest("[data-dropdown]")) closeAllDropdowns();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllDropdowns();
});

const form = document.querySelector("[data-enquiry-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject") || "Tile project quote");
    const body = encodeURIComponent([
      "Name: " + (data.get("name") || ""),
      "Email: " + (data.get("email") || ""),
      "Phone: " + (data.get("phone") || ""),
      "Project type: " + (data.get("project") || ""),
      "Message: " + (data.get("message") || "")
    ].join("\n"));
    window.location.href = "mailto:goodmanseo.sydney@gmail.com?subject=" + subject + "&body=" + body;
  });
}
