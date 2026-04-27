// SSD-iT Solutions – partials loader, animations, interactions

async function loadPartial(id, url) {
  try {
    const container = document.getElementById(id);
    if (!container) return;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}: ${response.status}`);
    const html = await response.text();
    container.innerHTML = html;

    if (id === 'site-header') initializeHeaderInteractions();
    if (id === 'site-footer') initializeFooterUtilities();
  } catch (error) {
    console.error(error);
  }
}

function initializeHeaderInteractions() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.dataset.open === 'true';
    if (isOpen) {
      menu.style.maxHeight = '0px';
      menu.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.dataset.open = 'true';
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menu.dataset.open === 'true') {
      menu.style.maxHeight = '0px';
      menu.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Sticky header shadow on scroll
  const header = document.querySelector('header[data-site-header]');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 6) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach((a) => {
    const target = a.getAttribute('data-nav-link');
    if (target === path) a.classList.add('text-primary');
  });
}

function initializeFooterUtilities() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function replaceFeatherIcons() {
  if (typeof feather !== 'undefined') {
    feather.replace({ 'stroke-width': 1.6 });
  }
}

// Scroll reveal observer
function initRevealObserver() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el) => io.observe(el));
}

// Counter animation
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = end * eased;
          el.textContent =
            (Number.isInteger(end) ? Math.round(value) : value.toFixed(2)) + suffix;
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = end + suffix;
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((c) => io.observe(c));
}

document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    loadPartial('site-header', 'partials/header.html'),
    loadPartial('site-footer', 'partials/footer.html'),
  ]).then(() => {
    replaceFeatherIcons();
    initRevealObserver();
    initCounters();
  });
});
