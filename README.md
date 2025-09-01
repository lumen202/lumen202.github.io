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

CI / Deploy

This repository can be built and deployed using any CI provider that runs `npm ci` and `npm run build`. For GitHub Pages you can either build locally and push the `dist/` folder to the publishing branch, or add a CI workflow that runs the build and publishes the `dist/` directory.

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


GitHub Pages CI

This repository now contains a GitHub Actions workflow at `.github/workflows/deploy.yml` that runs `npm ci` and `npm run build`, then publishes the generated `dist/` folder to GitHub Pages on pushes to `main`.

