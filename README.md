# Joshua Diniega — Portfolio

This repository contains a lightweight, professional portfolio site built with Vue 3 (via CDN) and plain HTML/CSS so it can be deployed to GitHub Pages without a build step.

What you get

- `index.html` — main entry using Vue 3 from CDN
- `src/app.js` — app data and simple component structure
- `src/styles.css` — responsive, professional styles

Preview locally

You can preview the site locally with a simple static server. From the repository root run:

```bash
# macOS / zsh
# Recommended: Python 3
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Vite development and deploy

This repo has been converted to a Vite project. Use the following commands locally:

```bash
# install deps
npm install

# dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

CI Deploy

This repository contains a GitHub Actions workflow at `.github/workflows/pages.yml` that builds the site and deploys to GitHub Pages on pushes to `main`.

Because this is a user/organization site (`lumen202.github.io`), deployment will publish to `https://lumen202.github.io` once the workflow completes. Confirm Pages settings in the repository Settings if you need to adjust branches or a custom domain.

Optional: Custom domain

If you want a custom domain, add a `CNAME` file with your domain and configure DNS as described in GitHub Pages docs.

Next steps / recommended edits

- Replace the placeholder email `joshua@example.com` in `src/app.js` with your real email.
- Replace project items with real projects, live links and repositories.
- Add screenshots to an `assets/` folder and reference them in the cards.

If you'd like, I can:

- Add a projects detail page and modal screenshots
- Wire up a contact form with form handling (Netlify Forms / Formspree)
- Convert this to a Vite-powered app (SFCs, build pipeline) if you prefer a modern dev workflow

