// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal for marker highlights and fade-ins
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('[data-mark]').forEach(el => observer.observe(el));

// Fade up reveal for cards and sections
const revealTargets = document.querySelectorAll(
  '.file-card, .process-step, .about-item, .evidence-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));
revealTargets.forEach(el => observer.observe(el));
