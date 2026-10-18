# Lab 06 — CSS3 Gallery Portal

`index.html` — semantic HTML, accessible flip cards, inline SVG, video, track, iframe.
`style.css` — CSS variables, light/dark mode, Grid responsive layout, animation, 3D transitions, reduced motion.
`script.js` — theme toggle + `aria-pressed` and clickable/keyboard-flippable cards.
`img/photo1.jpg`–`photo6.jpg` — educational sample images from `scikit-image` sample data.
`video/clip.mp4`, `clip.webm`, `clip.mn.vtt` — silent sample slideshow and matching captions.

## Quick test

1. Start VS Code Live Server from `lab6/index.html`.
2. Flip cards via mouse click, or Tab+Enter/Space.
3. Switch Light/Dark mode and reload to confirm the saved choice.
4. Test 375px, 768px, 1280px viewport widths and check horizontal scrolling.
5. In Edge/Chrome DevTools > Rendering > Emulate CSS media feature `prefers-reduced-motion: reduce`, confirm animations stop.
6. Play video with Mongolian captions enabled; embedded video needs network.

## Git / GitHub Pages

Work in branch `lab6` (created from `main`). Push with `git push -u origin lab6`.
Under Repository Settings > Pages > Build and deployment select Deploy from a branch, branch `lab6`, folder `/(root)`, and Save. Site: `https://dorjbatchuluuntulga.github.io/web-development-lab/lab6/` after deployment.
**Note:** switching GitHub Pages from main to lab6 changes the published source for the whole repository; files for earlier labs remain if branch lab6 was created from main, but future main updates will not be published until the Pages source is changed back or merged.

## Demo media

The sample photos originate from scikit-image's bundled demo data. The video is a silent slideshow created from those example photos. Replace with your own images/video if your instructor wants personally captured media. The external iframe uses a privacy-enhanced YouTube embed (requires internet).
