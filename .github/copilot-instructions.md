# Copilot / AI Agent Instructions — PCEA-MEMBERLY-SCHOOL

Purpose: give an AI coding agent the exact, discoverable knowledge needed to be productive in this repository.

Big picture

- This is a small static website (HTML/CSS/vanilla JS) served from a web server (XAMPP or any static host). The entry is `index.html` which loads a module script `js/main.js` and a legacy script `hero-slider.js`.
- JS is organized as ES modules under `js/` (primary runtime) and a legacy script at project root. Prefer changes in `js/` to keep the module-based flow.

Key files / directories (examples)

- `index.html` — page markup and the script tags (module: `js/main.js` + non-module `hero-slider.js`).
- `js/main.js` — bootstraps the app by importing exported `init*` functions from `js/ui-handlers.js` and calling them on `DOMContentLoaded`.
- `js/ui-handlers.js` — the main library of exported `initX` functions (navigation, sliders, particles, theme toggle, accessibility patterns). Add new features here as `export const initSomething = () => { ... }` and call from `js/main.js`.
- `hero-slider.js` — legacy non-module slider that also manipulates `.hero-bg img`. Beware duplication: `initHeroBackgroundSlider()` in `js/ui-handlers.js` implements the same behavior; avoid editing both without checking which one should remain.
- `style.css` — single large stylesheet; theme toggling is CSS-class based (body `.dark`) and `initThemeToggle` uses `localStorage`.
- `PCEASCH-IMAGES/` and `media/` — image assets used by the hero and gallery.

Conventions & patterns (concrete)

- Export naming: JS uses `initX` functions exported from `js/ui-handlers.js`. Follow that naming and guard for missing DOM nodes (pattern: `if (!el) return;`). Example: `export const initAboutTabs = () => { const aboutBtns = document.querySelectorAll('.about-btn'); if (!aboutBtns.length) return; ... }`.
- Progressive enhancement: functions check for element presence and safely return; prefer this style for new behavior.
- Accessibility: tabs use `click`, `touchstart` and keyboard handlers in `initAboutTabs` — mirror that pattern for new interactive components.
- Touch + swipe patterns: `initJourney` implements touchstart/touchmove/touchend swipe detection. Reuse this style when adding mobile gestures.

Dev & runtime notes (how to run)

- Must be served over HTTP for ES modules to load. Do NOT open `index.html` with `file://` for development.
- Example quick servers (PowerShell):
  - Using Node static server: `npx http-server -c-1` then open `http://localhost:8080` (or the printed URL).
  - Using the workspace XAMPP setup: drop into `htdocs` and browse `http://localhost/PCEA-MEMBERLY-SCHOOL/`.
- Use the browser console to catch module import errors (typical when path casing or relative paths are wrong).

Editing guidance & common tasks

- Add a new feature:
  1. Create `export const initFeature = () => { ... }` in `js/ui-handlers.js`.
  2. Import and call it from `js/main.js` inside DOMContentLoaded.
  3. Use `document.querySelector` guards and IntersectionObserver where appropriate (see `initCounters` pattern).
- Fix hero slider duplication: prefer the ES module implementation in `js/ui-handlers.js` (used by `js/main.js`). If removing `hero-slider.js`, remove its `<script>` tag in `index.html` to prevent double-running.
- Theme changes: `initThemeToggle` toggles `document.body.classList.add('dark')` and persists `localStorage['theme']` — change CSS in `style.css` and ensure the toggle element has id `themeToggle`.

Testing & debugging

- No automated tests. Use the browser devtools and `console` for runtime errors.
- When editing JS modules, refresh the page and watch the console for `Failed to fetch module` or `Uncaught ReferenceError` to debug import/namespace issues.

Don'ts / gotchas

- Don't edit only `hero-slider.js` if the behavior is also implemented in `js/ui-handlers.js` — that causes race/duplication.
- Because there is no build step, keep imports as browser-friendly ES module paths (relative file paths).

If anything above is unclear or you want more examples (e.g., extend `initCounters` or add a new module), tell me which feature to implement and I'll update this file or create the code change.
