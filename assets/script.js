// Scroll suau per a enllaços interns
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Enllaç intern (#)
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Enllaç a una altra pàgina → animació de sortida
    e.preventDefault();
    document.body.classList.add('page-exit');

    setTimeout(() => {
      window.location.href = href;
    }, 450);
  });
});

// Animació fade-in en fer scroll
const fadeEls = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.style.animationPlayState = 'running';
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
fadeInOnScroll();

// Menú hamburguesa en mòbil
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('show');
  });

  // Tancar menú en clicar un enllaç (en mòbil)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('show');
    });
  });
}

