# SandboxX + Skull & Scorpion Integrated Website

This version updates all pages so the Skull & Scorpion photography page works cleanly inside the SandboxX Media Group website.

## What changed

- Photography page is now Skull & Scorpion branded
- Photography page has a clear **Back to Sandbox Main** button
- Navigation includes a **← Sandbox Main** link on every page
- Contact Us slide panel works across all pages
- Shared `style.css` supports SandboxX and Skull & Scorpion sections
- Shared `script.js` supports:
  - mobile menu
  - slide-open contact panel
  - reveal-on-scroll animations
- Homepage photography button now points to Skull & Scorpion photography

## Files

Upload all files to GitHub:

- `index.html`
- `videography.html`
- `editing.html`
- `photography.html`
- `style.css`
- `script.js`
- `README.md`

## Contact form setup

Replace every instance of:

```html
your-email@example.com
```

with your real email address.

## Adding images/videos

Create an `assets` folder and upload your media.

Then replace placeholder comments like:

```html
<!-- Example: <img src="assets/skull-scorpion-portrait.jpg" alt="Skull & Scorpion portrait photography" /> -->
```

with live media:

```html
<img src="assets/skull-scorpion-portrait.jpg" alt="Skull & Scorpion portrait photography" />
```

For video:

```html
<video src="assets/video-1.mp4" autoplay muted loop playsinline></video>
```

## Brand colours used

- SandboxX Purple: `#823db2`
- SandboxX Gold: `#f6dd99`
