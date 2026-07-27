(function () {
  "use strict";

  /* Flag JS availability so reveal styles only hide content when JS runs */
  document.documentElement.classList.add("js");

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initHeroSlider();
    initProductTabs();
    initReveal();
  });

  /* --------------------------------------------------------
     Mobile navigation toggle
     -------------------------------------------------------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".main-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --------------------------------------------------------
     Hero slider — crossfade, auto-advance, dots, pause on hover
     -------------------------------------------------------- */
  function initHeroSlider() {
    var frame = document.querySelector(".slider-frame");
    if (!frame) return;
    var slides = frame.querySelectorAll(".slide");
    var dots = frame.querySelectorAll(".slider-dot");
    if (slides.length < 2 || dots.length !== slides.length) return;

    var INTERVAL_MS = 5500;
    var current = 0;
    var timer = null;

    function goTo(index) {
      slides[current].classList.remove("is-active");
      slides[current].setAttribute("aria-hidden", "true");
      dots[current].classList.remove("is-active");
      dots[current].removeAttribute("aria-current");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      slides[current].removeAttribute("aria-hidden");
      dots[current].classList.add("is-active");
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
        goTo(current + 1);
      }, INTERVAL_MS);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goTo(i);
        start();
      });
    });

    frame.addEventListener("mouseenter", stop);
    frame.addEventListener("mouseleave", start);
    frame.addEventListener("focusin", stop);
    frame.addEventListener("focusout", start);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    });

    start();
  }

  /* --------------------------------------------------------
     Product tabs (products.html) — click a line to swap panels
     -------------------------------------------------------- */
  function initProductTabs() {
    var tabs = document.querySelectorAll(".tab-btn");
    var panels = document.querySelectorAll(".tab-panel");
    if (!tabs.length || !panels.length) return;

    function activate(name) {
      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute("data-tab") === name;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });
      panels.forEach(function (panel) {
        panel.classList.toggle("is-active", panel.getAttribute("data-panel") === name);
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activate(tab.getAttribute("data-tab"));
      });
    });

    var initial = document.querySelector(".tab-btn.is-active") || tabs[0];
    activate(initial.getAttribute("data-tab"));
  }

  /* --------------------------------------------------------
     Scroll-reveal — fade + rise once per element
     -------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
