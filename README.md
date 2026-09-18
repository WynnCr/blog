# amrit-blog

A minimal, editorial blog built with Astro, MDX, and Tailwind. No database,
no CMS — posts are Markdown/MDX files in `src/content/blog/`.

## Structure

```
src/
├── components/       Header, Footer, CommandPalette, PostRow
├── content/
│   ├── blog/         Blog posts (.mdx)
│   └── projects/     Project entries (.md)
├── layouts/          BaseLayout.astro
├── lib/              format.ts (dates, reading time)
├── pages/            index, blog/, projects, about, rss.xml
└── styles/           global.css (design tokens + typography)
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Writing a new post

Add a file to `src/content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your title"
excerpt: "One sentence for the listing page and RSS."
date: 2026-09-20
tags: ["rust", "linux"]
---

Your content here, in Markdown, with optional embedded components.
```

Commit and push — the post appears automatically once deployed.

## Adding a project

Add a file to `src/content/projects/your-project.md`:

```md
---
title: "your-project"
description: "One line about what it does."
href: "https://github.com/you/your-project"
tags: ["go"]
order: 4
---
```

## Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds and
deploys to GitHub Pages on every push to `main`.

Before your first deploy:

1. **Set `site` and `base` in `astro.config.mjs`.**
   - If this repo is `github.com/<you>/<repo>` and you're using project
     pages (the default), set:
     ```js
     site: 'https://<you>.github.io',
     base: '/<repo>',
     ```
   - If this is a user/org site (the `<you>.github.io` repo itself), set
     `base: '/'` and drop the `base` prefix from links.
2. In the repo's GitHub settings, go to **Settings -> Pages** and set
   **Source** to **GitHub Actions**.
3. Push to `main`. The workflow builds the site and publishes `dist/` to
   Pages automatically.

## Theme

Colors, spacing, and typography are defined as CSS custom properties in
`src/styles/global.css`. Light/dark mode is controlled by a `data-theme`
attribute on `<html>`, toggled by the button in the header and persisted
to `localStorage`; it otherwise follows the OS preference.

## Command palette

Press `Cmd+K` / `Ctrl+K` anywhere on the site to jump between pages or
toggle the theme.
