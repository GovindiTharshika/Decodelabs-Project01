document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Animated Hamburger Menu ── */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    const setMenuState = (open) => {
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
      mobileMenu.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
        menuToggle.focus();
      }
    });
  }

  /* ── Staggered Scroll Reveal (IntersectionObserver) ── */
  const assignStaggerDelays = () => {
    const groups = document.querySelectorAll(
      '.features-grid, .content-grid, .sidebar, .timeline, .hero-grid, .section-header, .cta-banner'
    );

    groups.forEach((group) => {
      const items = group.querySelectorAll(':scope > .reveal');
      items.forEach((el, index) => {
        el.style.setProperty('--reveal-delay', `${index * 100}ms`);
      });
    });
  };

  assignStaggerDelays();

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add('active');
    } else {
      revealObserver.observe(el);
    }
  });

  /* ── Active Nav Highlighting (IntersectionObserver) ── */
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = document.querySelectorAll('.nav-links a, #mobile-menu a');

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', id && href === `#${id}`);
      if (!id && link.textContent.trim().toLowerCase() === 'shop' && href === '#') {
        link.classList.add('active');
      }
    });
  };

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveLink(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ── Back to Top (IntersectionObserver on hero) ── */
  const backToTop = document.getElementById('back-to-top');
  const hero = document.querySelector('.hero');

  if (backToTop && hero) {
    const toggleBackToTop = (show) => {
      backToTop.classList.toggle('show', show);
      backToTop.setAttribute('aria-hidden', show ? 'false' : 'true');
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => toggleBackToTop(!entry.isIntersecting),
      { threshold: 0 }
    );

    heroObserver.observe(hero);
    toggleBackToTop(false);

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ── Newsletter form (prevent default, accessible feedback) ── */
  const newsletterForm = document.querySelector('.widget-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.checkValidity()) {
        input.value = '';
        input.placeholder = 'Thank you for subscribing!';
      }
    });
  }
});
