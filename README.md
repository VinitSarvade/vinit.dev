# vinit.dev

My personal portfolio website built with Astro, React, and TailwindCSS.

**Live:** [vinit.dev](https://vinit.dev)

## Tech Stack

- **Astro** - Static site generation
- **React 19** - Interactive UI components
- **TailwindCSS v4** - Styling
- **Radix UI / shadcn/ui** - Accessible component primitives
- **Fontsource** - Self-hosted variable fonts
- **Bun** - Package manager & runtime

## Features

- Dark/light theme with a circular view-transition reveal
- Bento layout: full-width hero with a glass "current role" panel, paired tiles, and a masonry skills grid
- Scroll-driven motion: staggered tile reveals, an active-section nav underline, a scroll progress bar, and a timeline rail that draws in (respects `prefers-reduced-motion`)
- Collapsible experience log with a footnote for roles that started as internships
- Years of experience computed from the experience data at build time
- Self-hosted variable fonts (Bricolage Grotesque, Figtree, JetBrains Mono) via Fontsource
- JSON-LD structured data for SEO
- Content Security Policy headers
- Accessibility-first (skip links, ARIA labels, semantic HTML)

## Getting Started

```sh
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```text
src/
├── pages/          # Astro pages
├── components/
│   ├── portfolio/  # Portfolio section components
│   └── ui/         # shadcn/ui components
├── lib/            # Utilities
└── styles/         # Global styles
```

## Make It Your Own

1. **Fork & clone** the repo

2. **Update personal info** in `src/components/portfolio/portfolio-data.ts` — this single file contains all the content:
   - `profile` — name, role, tagline, availability, social links, résumé path
   - `contact` — location, timezone, email, and the contact banner copy
   - `skills` — skill categories and items (icons live in `skill-icons.tsx`)
   - `experience` — work history, newest first; the first entry is shown as the current role. Add a `note` for footnotes such as an internship
   - `education` — degrees and institutions
   - `certificates` — certifications with image URLs
   - `projects` — personal/side projects (`ai: true` adds an AI badge)
   - `about` — bio paragraphs; the first one doubles as the hero lead
   - `pillars` and `aiWork` — the three About highlights and the "AI features shipped" list
   - `{{years}}` in any copy is replaced with the years computed from `experience`

3. **Update metadata** in `src/pages/index.astro`:
   - Page title, meta description, author
   - OG/Twitter card tags
   - JSON-LD structured data
   - Favicon links (replace files in `public/favicon/`)

4. **Update headers** in `public/_headers` if deploying to Cloudflare Pages or similar — adjust the CSP `img-src` directive if you reference external image domains

5. **Customize theme** in `src/styles/global.css` — light and dark palettes are plain hex tokens on `:root` and `.dark`; the amber accent is `--amber`. Fonts are imported from Fontsource at the top of the file

## Deployment

### Option 1: Cloudflare Pages Git Integration

1. Push your repo to GitHub/GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) > **Workers & Pages** > **Create** > **Pages** > **Connect to Git**
3. Select your repo and configure the build settings:
   - **Build command:** `bun run build`
   - **Build output directory:** `dist`
4. Deploy — Cloudflare will auto-deploy on every push to `main`

### Option 2: Cloudflare Pages via Wrangler CLI

```sh
# Install wrangler globally
bun add -g wrangler

# Login to Cloudflare
wrangler login

# Build and deploy
bun run build && wrangler pages deploy dist --project-name=vinit-dev
```

Or add a deploy script to `package.json`:

```json
"scripts": {
  "deploy": "astro build && wrangler pages deploy dist --project-name=vinit-dev"
}
```

Then run `bun run deploy` whenever you want to publish.

### Option 3: Vercel

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Astro — no configuration needed
4. Deploy — auto-deploys on every push to `main`

Or deploy via the CLI:

```sh
bun add -g vercel
vercel
```

### Option 4: GitHub Pages

1. Set the `site` and `base` in `astro.config.mjs`:

   ```js
   export default defineConfig({
     site: 'https://<username>.github.io',
     base: '/<repo-name>', // omit if using a custom domain
   });
   ```

2. Add `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: oven-sh/setup-bun@v2
         - run: bun install
         - run: bun run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

3. In your repo settings, go to **Pages** > **Source** and select **GitHub Actions**
