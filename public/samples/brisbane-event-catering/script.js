const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const serviceToggle = document.querySelector('.service-toggle');
const quoteForm = document.querySelector('.quote-form');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (serviceToggle) {
  serviceToggle.addEventListener('click', () => {
    const parent = serviceToggle.closest('.nav-dropdown');
    const isOpen = parent.classList.toggle('is-open');
    serviceToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown.is-open').forEach((item) => item.classList.remove('is-open'));
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.nav-dropdown.is-open').forEach((item) => item.classList.remove('is-open'));
  }
});

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent('Gather & Garnish catering enquiry');
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}\nPhone: ${data.get('phone') || ''}\nEvent date: ${data.get('date') || ''}\nGuests: ${data.get('guests') || ''}\nMessage: ${data.get('message') || ''}`
    );
    window.location.href = `mailto:goodmanseo.sydney@gmail.com?subject=${subject}&body=${body}`;
  });
}
