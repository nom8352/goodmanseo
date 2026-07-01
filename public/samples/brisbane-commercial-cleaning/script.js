document.addEventListener("DOMContentLoaded", () => {
    // Add js-enabled class to HTML element for motion styling
    document.documentElement.classList.add("js-enabled");

    const navbar = document.querySelector(".navbar");
    const mobileButton = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const form = document.querySelector("#quoteForm");
    const revealItems = document.querySelectorAll(".reveal-item");

    const closeMenu = () => {
        if (!navLinks || !mobileButton) {
            return;
        }

        navLinks.classList.remove("is-active");
        mobileButton.setAttribute("aria-expanded", "false");
        mobileButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.body.classList.remove("menu-open");
    };

    if (mobileButton && navLinks) {
        mobileButton.addEventListener("click", () => {
            const isActive = navLinks.classList.toggle("is-active");
            mobileButton.setAttribute("aria-expanded", String(isActive));
            mobileButton.innerHTML = isActive
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
            
            if (isActive) {
                document.body.classList.add("menu-open");
            } else {
                document.body.classList.remove("menu-open");
            }
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

    // Scroll Reveal Intersection Observer
    if (revealItems.length > 0) {
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px"
            });

            revealItems.forEach((item) => observer.observe(item));
        } else {
            revealItems.forEach((item) => item.classList.add("is-visible"));
        }
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending Enquiry...';
            }

            // Simulate server-side post/AJAX response with smooth transition
            setTimeout(() => {
                form.reset();
                
                // Show custom elegant success message inline with fade animation
                form.innerHTML = `
                    <div class="success-message" style="text-align: center; padding: 24px 0; animation: fadeIn 0.4s ease forwards;">
                        <i class="fa-solid fa-circle-check" style="color: var(--teal); font-size: 3rem; margin-bottom: 18px; display: block;"></i>
                        <h3 style="font-family: var(--font-display); font-size: 1.5rem; color: var(--ink); margin-bottom: 12px; font-weight: 700;">Enquiry Received!</h3>
                        <p style="color: var(--muted); font-size: 0.92rem; line-height: 1.6; max-width: 320px; margin: 0 auto;">
                            Thank you! Your quote request has been received. Our Brisbane operations team will prepare your itemized quote within 24 hours.
                        </p>
                    </div>
                `;
            }, 1200);
        });
    }
});
