QA Checklist — PCEA-MEMBERLY-SCHOOL

Manual checks to run in a browser (recommended: Chrome/Edge/Firefox):

1. Navigation

- [ ] Desktop: `.navbar` visible, links navigate to sections.
- [ ] Mobile: hamburger toggles side menu; overlay blocks background; `body.no-scroll` applied.
- [ ] Active link highlights when section in view (desktop and side menu).

2. Theme toggle

- [ ] Click desktop and mobile toggles: site switches light/dark.
- [ ] Icon animates briefly on click and syncs between both toggles.
- [ ] Theme persists after page reload (check `localStorage.theme`).

3. Hero slider

- [ ] Hero background rotates every ~7s, mouse parallax on desktop.
- [ ] Only one slider implementation runs (no duplicate rotations).

4. Gallery & Lightbox

- [ ] Filter buttons hide/show gallery items.
- [ ] Clicking an image opens the lightbox; close by clicking overlay or ✕.

5. Accessibility

- [ ] Skip link appears with keyboard focus and jumps to main content.
- [ ] Keyboard navigation: tab through header links and interactive controls.
- [ ] Focus outlines are visible (`:focus-visible`).

6. Buttons & micro-interactions

- [ ] Primary CTA hover shows lift and shadow; clicks have subtle press state.
- [ ] Back-to-top button appears after scrolling and scrolls smoothly to top.

7. Responsive layout

- [ ] Check breakpoints: <=900px mobile header shows; >=901px desktop navbar shows.
- [ ] Gallery columns collapse (3→2→1) at expected widths.

8. Console & Network

- [ ] No `Failed to fetch module` or JS console errors.
- [ ] All `js/*.js` files return 200 when loaded (use Network tab).

Notes

- If you preview using `file://`, some browsers block ES module imports — serve via a static server or use XAMPP for accurate testing.
- If any module fails to load, copy the exact console error and I will fix import paths or missing exports.

Optional

- Take screenshots of any visual regressions and I will tune spacing/colors accordingly.
