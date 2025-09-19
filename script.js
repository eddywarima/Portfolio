// =========================
// Main Script - script.js
// =========================

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust for navbar
        behavior: 'smooth'
      });
    }
  });
});

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(
  '.service-item, .about-text, .project-card, .education-item, .interest-card, .contact-item, .contact-form'
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Theme Toggle (Sync with body) =====
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
    }
    // Persist preference
    localStorage.setItem('theme', themeToggle.checked ? 'light' : 'dark');
  });

  // Load preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    themeToggle.checked = true;
    body.classList.add('light-mode');
  }
}

// ===== Contact Form Validation =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    let valid = true;
    let errorMessage = "";

    if (!name.value.trim()) {
      valid = false;
      errorMessage += "⚠️ Name is required.\n";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      valid = false;
      errorMessage += "⚠️ Please enter a valid email.\n";
    }

    if (!message.value.trim() || message.value.length < 10) {
      valid = false;
      errorMessage += "⚠️ Message must be at least 10 characters.\n";
    }

    if (!valid) {
      alert(errorMessage);
    } else {
      alert("✅ Thank you! Your message has been sent.");
      contactForm.reset();
    }
  });
}

// ===== Small Interaction: Hero Button Alert =====
const heroBtn = document.querySelector('.btn-primary');
if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    alert("🚀 Let's build something amazing together!");
  });
}
