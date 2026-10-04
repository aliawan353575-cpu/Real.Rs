# Vantorax Studio website

Static HTML/CSS/vanilla JS site. No build step.

## Deploy on GitHub Pages
1. Put these files in a repo (root, or a `/vantorax` folder).
2. Settings > Pages > deploy from branch.
3. Replace `YOUR-USERNAME.github.io/vantorax` in canonical tags, `robots.txt` and `sitemap.xml` with your real URL.

## Before launch
- Contact form is frontend-only. Connect `js/main.js` (see TODO) to Formspree, Netlify Forms or your own endpoint.
- Concept projects use CSS visuals. Swap in real images with `<img loading="lazy" alt="...">` inside `.thumb`.
- Colors, fonts and spacing live in `:root` in `css/style.css`.
- Not yet built: separate Services, Pricing, Work, Process, About, FAQ, Privacy and Terms pages (those sections live on the homepage).
