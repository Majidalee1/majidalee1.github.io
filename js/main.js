/* main.js — nav state, scroll reveals, count-up stats, work filtering.
   No dependencies. Everything degrades to a fully readable static page. */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- nav */

  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-stuck', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var burger = nav.querySelector('.nav__burger');
    if (burger) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', String(open));
      });
      nav.querySelectorAll('.nav__links a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('is-open');
          burger.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* ------------------------------------------------------------ reveals */

  var revealables = document.querySelectorAll('[data-reveal], [data-bars]');

  if (!('IntersectionObserver' in window) || reduced) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    revealables.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------------------- count-up */

  var counters = document.querySelectorAll('[data-count]');

  var runCount = function (el) {
    var target = parseFloat(el.dataset.count);
    var decimals = (el.dataset.count.split('.')[1] || '').length;
    var duration = 1400;
    var start = null;

    var frame = function (ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      // easeOutExpo — lands softly, like the reference odometers
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  if (counters.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) { el.textContent = el.dataset.count; });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          cio.unobserve(entry.target);
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) {
        el.textContent = '0';
        cio.observe(el);
      });
    }
  }

  /* --------------------------------------------------- work filtering */

  var filters = document.querySelector('[data-filters]');
  if (filters) {
    var rows = Array.prototype.slice.call(document.querySelectorAll('[data-domain]'));
    var count = document.querySelector('[data-filter-count]');

    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;

      var want = btn.dataset.filter;
      filters.querySelectorAll('button[data-filter]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });

      var shown = 0;
      rows.forEach(function (row) {
        var match = want === 'all' || row.dataset.domain.split(' ').indexOf(want) > -1;
        row.hidden = !match;
        if (match) shown++;
      });
      if (count) count.textContent = String(shown);
    });
  }

  /* ------------------------------------------------- terminal typing */

  var term = document.querySelector('[data-type]');
  if (term && !reduced) {
    var rows = Array.prototype.slice.call(term.querySelectorAll('.term__row'));
    rows.forEach(function (row) { row.style.visibility = 'hidden'; });

    rows.forEach(function (row, i) {
      setTimeout(function () { row.style.visibility = 'visible'; }, 900 + i * 190);
    });
  }

  /* ----------------------------------------------------- current year */

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
