# Site Guide

How to run, edit, and publish this portfolio. No Astro knowledge needed.

## 1. Run it locally

```bash
npm install        # first time only
npm run dev        # then open http://localhost:4321
```

The dev server hot-reloads: save any file and the browser updates itself.
Stop it with `Ctrl+C`.

## Site structure

The nav has three tabs: **Portfolio**, **Resume**, **Blog** (the "Alden Lee"
logo goes home). The homepage is your intro + photo + contact. Projects are
grouped on the Portfolio page under **Tech** and **Finance**; recurring updates
go in the **Blog**.

## 2. Add a project page

Every `.md` file in `src/content/projects/` automatically becomes a card on the
**Portfolio** page (under its category) + its own page at
`/projects/<filename>/`. You never edit the Portfolio page to add a project.

1. Copy `src/content/projects/_template.md` and rename it.
   The filename becomes the URL: `goldbot.md` → `/projects/goldbot/`.
2. Fill in the frontmatter (the block between `---` lines):

   | Field      | Required | What it does |
   |------------|----------|--------------|
   | `title`    | yes      | Page heading and card title |
   | `blurb`    | yes      | One-liner on the card |
   | `category` | **yes**  | `tech` or `finance` — which Portfolio section it lands in |
   | `group`    | no       | Sub-heading within a category, e.g. `ML growth diary` |
   | `order`    | no       | Sort position within its section (lower = first, default 99) |
   | `tags`     | no       | Shown as chips |
   | `repo`     | no       | "source ↗" link (full URL) |
   | `demo`     | no       | "live demo ↗" link (full URL) |
   | `hero`     | no       | Image at the top of the page, e.g. `/images/goldbot.png` |
   | `wip`      | no       | `true` shows a "work in progress" badge (still visible) |
   | `draft`    | no       | `true` hides the project from the whole site |

3. Write the page body below the frontmatter in normal Markdown
   (`## headings`, `**bold**`, code blocks, images, links).
4. Save and check the browser.

Example:

```markdown
---
title: Goldbot
blurb: IBKR data puller for gold ETF, spot, and futures.
category: finance
order: 4
tags: [python, ibkr]
repo: https://github.com/AldenLee28/goldbot
draft: false
---

Pulls chunked historical bars from IBKR while respecting rate limits...
```

Typos in frontmatter (wrong field name, missing `category`, bad URL) fail the
build with a clear error instead of silently breaking the site.

## 3. Add a blog post

Every `.md` file in `src/content/blog/` becomes a post at `/blog/<filename>/`
and is listed on `/blog/` (newest first). Copy `src/content/blog/welcome.md`,
rename it, and edit the frontmatter:

```markdown
---
title: Weekly bot update — 2026-07-18
description: One-line summary shown in the blog list.
date: 2026-07-18          # controls ordering
tags: [trading]
draft: false              # true = hidden
---

Post body in Markdown...
```

## 4. Change the homepage

Open `src/pages/index.astro`:

- **Intro** — edit the text in the `<section class="hero">` block.
- **Photo** — drop a square image at `public/images/profile.jpg`; until then a
  styled "AL" initials avatar shows. (To actually swap it in, replace the
  `<div class="avatar">` with `<img src="/images/profile.jpg" alt="Alden Lee" />`.)
- **Contact** — edit the `contact` object at the top (email, GitHub, LinkedIn).
  The LinkedIn URL is a placeholder — put your real profile there.

## 4b. The Resume tab

`src/pages/resume.astro` shows an inline preview of `public/resume.pdf` plus a
download button. Just drop your résumé there as **`public/resume.pdf`** — no
code changes needed. Until the file exists the page shows a short placeholder.

To add another standalone page, create `src/pages/<name>.astro` from the same
`BaseLayout` pattern, then add `{ href: '/<name>/', label: '<Name>' }` to the
`tabs` array in `src/components/Nav.astro`.

## 5. Change the look (theme)

The design is adapted from the [astro-haze](https://github.com/kpab/astro-haze)
theme (MIT): glass cards, an animated aurora background, and a light/dark
toggle (sun/moon/monitor button in the nav — visitors cycle light → dark →
follow-system, and the choice is remembered).

Everything you'd normally want to change sits in the **EDIT ME block at the
top of `src/styles/tokens.css`**:

- **Accent color** — the `--color-accent*` variables are HSL values; change
  the first number (the hue, 0–360) on all of them to re-color the site:
  280 = purple (default), 200 = blue, 150 = green, 20 = orange.
  The same variables appear again in the `[data-theme="dark"]` block below —
  change the hue there too so dark mode matches.
- **Aurora colors** — `--aurora-1` to `--aurora-4` are the four blurred
  gradient blobs behind the page. Same idea: edit the hues.
- **Fonts** — `--font-sans` is the whole site's typeface; `--font-mono` is
  used for code blocks. Replace either stack, e.g.
  `--font-sans: Georgia, serif;`.

Deeper changes: glass transparency/blur live in the `--glass-*` tokens,
page/text colors in `--color-bg`/`--color-text*` (light mode in `:root`,
dark mode in `[data-theme="dark"]`). The glass effects themselves
(`.glass-card`, `.glass-nav`, `.glass-button`) are defined in
`src/styles/glass.css`.

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
