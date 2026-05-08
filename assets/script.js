const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollBtn.addEventListener('click', () => {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

const menuToggle   = document.getElementById('menu-toggle');
const mobileNav    = document.getElementById('mobile-nav');
const mobileClose  = document.getElementById('mobile-nav-close');
const mobileLinks  = document.querySelectorAll('.mobile-link');

function openMobileNav() {
  mobileNav.style.display = 'flex';   
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      mobileNav.classList.add('open');
    });
  });
  menuToggle.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; 
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';

  mobileNav.addEventListener('transitionend', () => {
    if (!mobileNav.classList.contains('open')) {
      mobileNav.style.display = '';
    }
  }, { once: true });
}

menuToggle.addEventListener('click', () => {
  if (mobileNav.classList.contains('open')) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
});

mobileClose.addEventListener('click', closeMobileNav);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
    closeMobileNav();
  }
});

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('#desktop-nav a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => fadeObserver.observe(el));

document.getElementById('btn-portifolio').addEventListener('click', () => {
  document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});

function toggleTimeline(card) {
  const isExpanded = card.classList.contains('expanded');
  card.classList.toggle('expanded');

  const toggleLabel = card.querySelector('.timeline-toggle span');
  if (toggleLabel) {
    toggleLabel.textContent = isExpanded ? 'Ler mais' : 'Ler menos';
  }
}

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,.4)'
    : 'none';
}, { passive: true });

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-send');
    const originalHTML = btn.innerHTML;

    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#fff" fill="none" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Enviado!
    `;
    btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}