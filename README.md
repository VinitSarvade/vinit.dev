# vinit.dev

My personal portfolio website built with Astro, React, and TailwindCSS.

**Live:** [vinit.dev](https://vinit.dev)

## Tech Stack

- **Astro** - Static site generation
- **React 19** - Interactive UI components
- **TailwindCSS v4** - Styling
- **Radix UI / shadcn/ui** - Accessible component primitives
- **MDX** - Markdown with JSX support
- **Bun** - Package manager & runtime

## Features

- Dark/light theme with view transition animations
- Responsive two-column layout
- Collapsible experience timeline
- Certificates section with image thumbnails
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
   - `profile` — name, role, and social links
   - `skills` — skill categories and items
   - `experience` — work history entries
   - `education` — degrees and institutions
   - `certificates` — certifications with image URLs
   - `projects` — personal/side projects
   - `about` — bio text

3. **Update metadata** in `src/pages/index.astro`:
   - Page title, meta description, author
   - OG/Twitter card tags
   - JSON-LD structured data
   - Favicon links (replace files in `public/favicon/`)

4. **Update headers** in `public/_headers` if deploying to Cloudflare Pages or similar — adjust the CSP `img-src` directive if you reference external image domains

5. **Customize theme** in `src/styles/global.css` — color variables are defined using OKLCH and can be swapped out to match your preference

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
