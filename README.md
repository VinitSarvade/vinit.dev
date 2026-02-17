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

```
src/
├── pages/          # Astro pages
├── components/
│   ├── portfolio/  # Portfolio section components
│   └── ui/         # shadcn/ui components
├── lib/            # Utilities
└── styles/         # Global styles
```
