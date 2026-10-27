# Agency website

A static agency landing page built with HTML, CSS and JavaScript. There is no build step.

## Local preview

Open `index.html` with VS Code Live Server. The workspace is configured for port 5502.

## Structure

- `index.html`: page content and accessible navigation.
- `style.css`: shared colors, spacing, section layouts and responsive breakpoints.
- `script.js`: mobile navigation and optional Leaflet map initialization.
- `images/`: local illustrations, portraits and icons.

## Making changes

Change shared colors and spacing in the custom properties at the top of `style.css`.
Layouts stack at 768px; mobile navigation starts at 1024px. Keep those navigation
breakpoints aligned in CSS and JavaScript. Use flexible grid columns and relative
widths so cards fit between breakpoints. The hamburger icon uses local CSS and
works without the icon font.

Sections use the full page width with a small edge inset. Hero spacing, type and
image height also respond to viewport height so the header and complete hero fit
on the first screen. Short landscape screens place the image beside the copy.

Google Fonts, Font Awesome, Leaflet and OpenStreetMap tiles use external services.
If Leaflet cannot load, the page keeps its navigation, contact fields and contact
details available, with a map fallback message. Native anchor scrolling respects
the sticky header and reduced motion preferences.

Newsletter and contact controls are presentation only. Connect them to a backend
before enabling submissions. Other placeholder buttons and legal/social links
also need their final destinations before launch.

## Verification

Run `node --check script.js` for JavaScript syntax. Preview the page at 320px,
375px, 430px, 768px, 1024px and desktop widths. Check that cards and forms fit
without horizontal scrolling, the menu closes after navigation and Escape, and
resizing to desktop resets the menu. Verify the FAQ and contact links as well.
On both phones and desktop screens, check that the entire hero, including its
buttons and quote, is visible before scrolling. Include short phone and landscape
viewports when checking changes to hero content.
