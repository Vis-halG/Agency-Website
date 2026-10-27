(() => {
  "use strict";

  function initializeNavigation() {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!navbar || !menuToggle || !mobileMenu) return;

    const mobileViewport = window.matchMedia("(max-width: 1024px)");

    function setMenuOpen(open) {
      const isOpen = open && mobileViewport.matches;
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu",
      );
      mobileMenu.hidden = !isOpen;
    }

    menuToggle.addEventListener("click", () => {
      setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    mobileMenu.addEventListener("click", (event) => {
      if (event.target.closest("a[href]")) setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !mobileMenu.hidden) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!mobileMenu.hidden && !navbar.contains(event.target))
        setMenuOpen(false);
    });

    mobileViewport.addEventListener("change", () => setMenuOpen(false));
    setMenuOpen(false);
  }

  function initializeMap() {
    const mapContainer = document.getElementById("map");
    const leaflet = window.L;

    // Keep the rest of the page usable when the map CDN is unavailable.
    if (!mapContainer || !leaflet) return;

    const location = [19.07617747318604, 72.87748570104678];
    const map = leaflet
      .map(mapContainer, {
        scrollWheelZoom: false,
        dragging: !window.matchMedia("(pointer: coarse)").matches,
      })
      .setView(location, 15);

    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map);
    leaflet.marker(location).addTo(map);

    const fallback = document.getElementById("mapFallback");
    if (fallback) fallback.hidden = true;
  }

  function initialize() {
    initializeNavigation();
    initializeMap();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
