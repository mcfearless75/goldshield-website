(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initHeroSlider();
    initProductTabs();
    initReveal();
  });

  /* --------------------------------------------------------
     Mobile navigation — hamburger opens a full-screen panel
     -------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector(".hamburger");
    var panel = document.querySelector(".mobile-nav");
    if (!toggle || !panel) return;

    function close() {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* --------------------------------------------------------
     Hero slider — crossfade, auto-advance, dots, pause on hover
     -------------------------------------------------------- */
  function initHeroSlider() {
    var wrap = document.getElementById("heroSlider");
    if (!wrap) return;
    var slides = wrap.querySelectorAll(".hero-slide");
    var dots = wrap.querySelectorAll(".slide-dot");
    if (slides.length < 2 || dots.length !== slides.length) return;

    var INTERVAL_MS = 5000;
    var current = 0;
    var timer = null;

    function go(index) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      dots[current].removeAttribute("aria-current");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
      dots[current].setAttribute("aria-current", "true");
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      stop();
      if (reducedMotion.matches) return;
      timer = setInterval(function () {
        go(current + 1);
      }, INTERVAL_MS);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        go(i);
        start();
      });
    });

    wrap.addEventListener("mouseenter", stop);
    wrap.addEventListener("mouseleave", start);
    wrap.addEventListener("focusin", stop);
    wrap.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    start();
  }

  /* --------------------------------------------------------
     Product tabs (homepage + products page)
     -------------------------------------------------------- */
  function initProductTabs() {
    var tabs = document.querySelectorAll(".prod-tab");
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        document.querySelectorAll(".prod-tab").forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        document.querySelectorAll(".prod-panel").forEach(function (p) {
          p.classList.remove("active");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        var panel = document.getElementById("tab-" + tab.dataset.tab);
        if (panel) panel.classList.add("active");
      });
    });
  }

  /* --------------------------------------------------------
     Fade in on scroll
     -------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(
      ".trust-item,.prod-card,.market-card,.accred-logos img,.contact-card,.feature-box,.sector-item,.info-block"
    );
    if (!items.length) return;

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    items.forEach(function (el) {
      el.style.cssText += "opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease;";
      obs.observe(el);
    });
  }
})();
