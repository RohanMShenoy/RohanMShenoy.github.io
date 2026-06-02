/* ============================================================
   script.js — Dark mode toggle + active nav section tracking
   ============================================================ */

(function () {
  'use strict';

  // ── Dark / Light toggle ──────────────────────────────────
  const html   = document.documentElement;
  const btn    = document.getElementById('themeToggle');
  const STORED = 'rms-theme';

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    localStorage.setItem(STORED, theme);
  }

  // Restore saved preference, or respect OS preference
  const saved = localStorage.getItem(STORED);
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      const current = html.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ── Active nav link on scroll ────────────────────────────
  const navLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
  const sections = [];

  navLinks.forEach(function (link) {
    const id  = link.getAttribute('href').slice(1);
    const el  = document.getElementById(id);
    if (el) sections.push({ id, el, link });
  });

  function onScroll() {
    const scrollY    = window.scrollY;
    const headerH    = parseInt(getComputedStyle(html).getPropertyValue('--header-h')) || 54;
    const threshold  = headerH + 40;

    let active = sections[0];
    sections.forEach(function (s) {
      if (s.el.getBoundingClientRect().top + scrollY - threshold <= scrollY) {
        active = s;
      }
    });

    navLinks.forEach(function (l) { l.classList.remove('active'); });
    if (active) active.link.classList.add('active');
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
