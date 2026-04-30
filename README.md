# Marina Costa Communication — marketing site

Single-page marketing site built with [Astro](https://astro.build). Static output, deploys to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to ./dist
npm run preview      # preview the production build locally
```

## Configure the Formspree endpoint

The contact form posts to a Formspree endpoint. Set it via an environment variable so it isn't committed:

1. Create an `.env` file at the project root:
   ```
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
   ```
2. In Cloudflare Pages, add the same variable under **Settings → Environment variables** (Production + Preview).

Without it, the form falls back to a placeholder URL and submissions will fail.

## Deploy to Cloudflare Pages

### One-time setup (Git-based, recommended)
1. Push this repo to GitHub (or GitLab).
2. In Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo, then configure the build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 (set as env var `NODE_VERSION=20` if needed)
4. Add env var `PUBLIC_FORMSPREE_ENDPOINT`.
5. Save and deploy. Future pushes to `main` auto-deploy.

### Direct upload (alternative, no Git)
```bash
npm install -g wrangler
npm run build
npx wrangler pages deploy dist --project-name=marina-costa-site
```

## Project structure

```
src/
├── components/Icons.astro       # inline SVG icon set
├── data/roles.ts                # role copy (Builder / Leader / Specialist)
├── layouts/Base.astro           # html shell
├── pages/index.astro            # the page
└── styles/global.css            # V6 Soft Brutal theme
public/assets/                   # logos
```

## Design system (V6 Soft Brutal)

- 2px firefly (`#0C2432`) borders everywhere, no rounded corners
- Hard offset shadows: `8px 8px 0 var(--very-peri)` on hover
- Atomic-tangerine (`#FFB27D`) wavy SVG marker through "clear" in the hero
- Type: Lora (heading), Manrope (body), JetBrains Mono (mono accent) — loaded from Google Fonts
- Tokens live as CSS custom properties at the top of `src/styles/global.css`

## Things still to do

- Replace placeholder portrait gradient with a real photo (`mc-portrait`)
- Wire up `Download one-pager` and `Download full bio` links
- Set the real Formspree endpoint via env var
