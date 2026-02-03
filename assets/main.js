// assets/main.js

async function loadPartial(id, url) {
  try {
    const container = document.getElementById(id);
    if (!container) return;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}: ${response.status}`);
    const html = await response.text();
    container.innerHTML = html;

    if (id === 'site-header') {
      initializeHeaderInteractions();
    }
    if (id === 'site-footer') {
      initializeFooterUtilities();
    }
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
    } else {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.dataset.open = 'true';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menu.dataset.open === 'true') {
      menu.style.maxHeight = '0px';
      menu.dataset.open = 'false';
    }
  });
}

function initializeFooterUtilities() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('site-header', 'partials/header.html');
  loadPartial('site-footer', 'partials/footer.html');
});

