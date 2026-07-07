# Site Guide

How to run, edit, and publish this portfolio. No Astro knowledge needed.

## 1. Run it locally

```bash
npm install        # first time only
npm run dev        # then open http://localhost:4321
```

The dev server hot-reloads: save any file and the browser updates itself.
Stop it with `Ctrl+C`.

## 2. Add a project page

Every `.md` file in `src/content/projects/` automatically becomes:
a nav link + a card on the home page + its own page at `/projects/<filename>/`.
You never edit the nav or home page to add a project.

1. Copy `src/content/projects/_template.md` and rename it.
   The filename becomes the URL: `goldbot.md` → `/projects/goldbot/`.
2. Fill in the frontmatter (the block between `---` lines):

   | Field   | Required | What it does |
   |---------|----------|--------------|
   | `title` | yes      | Page heading and card title |
   | `blurb` | yes      | One-liner on the home-page card |
   | `order` | no       | Sort position in nav/grid (lower = first, default 99) |
   | `tags`  | no       | Shown as `[tag]` chips |
   | `repo`  | no       | "source ↗" link (full URL) |
   | `demo`  | no       | "live demo ↗" link (full URL) |
   | `hero`  | no       | Image at the top of the page, e.g. `/images/goldbot.png` |
   | `draft` | no       | `true` hides the project from the whole site |

3. Write the page body below the frontmatter in normal Markdown
   (`## headings`, `**bold**`, code blocks, images, links).
4. Set `draft: false` when ready. Done — save and check the browser.

Example:

```markdown
---
title: Goldbot
blurb: IBKR data puller for gold ETF, spot, and futures.
order: 4
tags: [python, ibkr]
repo: https://github.com/AldenLee28/goldbot
draft: false
---

Pulls chunked historical bars from IBKR while respecting rate limits...
```

Typos in frontmatter (wrong field name, bad URL) fail the build with a
clear error instead of silently breaking the site.

## 3. Change the home screen

Open `src/pages/index.astro`:

- **Headline / intro** — edit the text inside `<section class="hero">`.
- **Project grid** — generated automatically; don't edit it. Control what
  appears and in which order with each project's `order` and `draft` fields.

## 4. Add a non-project page (e.g. Resume)

1. Create `src/pages/resume.astro` (the filename becomes the URL `/resume/`):

   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   ---

   <BaseLayout title="Resume — Alden Lee">
     <h1>resume</h1>
     <p>Content here. Plain HTML works.</p>
   </BaseLayout>
   ```

2. Add it to the nav: in `src/components/Nav.astro`, add one entry to the
   `pages` array:

   ```js
   const pages = [
     { href: '/about/', label: 'about' },
     { href: '/resume/', label: 'resume' },
   ];
   ```

## 5. Change the look (theme)

Everything visual lives in `src/styles/tokens.css` — colors, fonts, sizing.
Edit those variables and the whole site restyles at once.

Light theme example — replace the color block with:

```css
--bg: #ffffff;
--surface: #f5f5f4;
--border: #e2e0dd;
--text: #1c1917;
--muted: #6b6660;
--accent: #0d7a3f;
--accent-2: #b45309;
```

To drop the monospace look, set `--font-body` to a sans-serif stack, e.g.
`system-ui, sans-serif`. The `> ` prefix on headings comes from the
`h1::before` rule in `src/styles/global.css` — delete that rule to remove it.

## 6. Add images

1. Drop the file in `public/images/` (create the folder if needed).
2. Reference it as `/images/name.png` — in a project's `hero` field, or in
   Markdown: `![chart](/images/backtest.png)`.

## 7. Publish changes

```bash
git add -A
git commit -m "add goldbot project"
git push
```

Pushing to `main` triggers the GitHub Action, which rebuilds and deploys.
The live site at https://aldenlee28.github.io updates in ~1–2 minutes.
Watch progress (or errors) in the repo's **Actions** tab on GitHub.

Before pushing, you can sanity-check the production build locally:

```bash
npm run build      # must finish with no errors
npm run preview    # serves the built site at http://localhost:4321
```
