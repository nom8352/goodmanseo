document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const mobileButton = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const form = document.querySelector("#quoteForm");

    const closeMenu = () => {
        if (!navLinks || !mobileButton) {
            return;
        }

        navLinks.classList.remove("is-active");
        mobileButton.setAttribute("aria-expanded", "false");
        mobileButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    if (mobileButton && navLinks) {
        mobileButton.addEventListener("click", () => {
            const isActive = navLinks.classList.toggle("is-active");
            mobileButton.setAttribute("aria-expanded", String(isActive));
            mobileButton.innerHTML = isActive
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    window.addEventListener("scroll", () => {
        if (!navbar) {
            return;
        }

        navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    });

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = form.querySelector("#name")?.value.trim() || "";
            const email = form.querySelector("#email")?.value.trim() || "";
            const phone = form.querySelector("#phone")?.value.trim() || "";

            const subject = encodeURIComponent(`[North Lakes Commercial Cleaning] Custom Quote Request`);
            const body = encodeURIComponent(
                [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    `Phone: ${phone}`,
                    "",
                    "Please get back to me with a custom quote for commercial cleaning services."
                ].join("\n")
            );

            window.location.href = `mailto:goodmanseo.sydney@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
