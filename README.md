# SandboxX Media Group Dynamic Media Website

Dynamic portfolio-ready website for SandboxX Media Group.

## Brand Colors
- Purple: `#823db2`
- Gold: `#f6dd99`

## Pages
- `index.html` — dynamic homepage with slide-open contact panel
- `videography.html` — videography page with a Drone button/section inside it
- `editing.html` — video editing page
- `photography.html` — photography page
- `style.css` — animations, layout, responsive design
- `script.js` — mobile menu, contact slide effect, reveal-on-scroll

## Contact Form Setup
Replace every instance of `your-email@example.com` with your real email.

The form uses FormSubmit because GitHub Pages cannot send emails on its own.

## Adding Images/Videos
Create an `assets` folder and upload files there. Then uncomment examples inside media tiles:

```html
<video src="assets/video-1.mp4" autoplay muted loop playsinline></video>
<img src="assets/photo-1.jpg" alt="Project photo" />
```

## Publish
GitHub → Settings → Pages → Deploy from branch → main → /root
