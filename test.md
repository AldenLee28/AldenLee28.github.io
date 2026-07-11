# Verification log

## 2026-07-07 — initial scaffold verification

Environment: Node v24.14.1, npm 11.11.0, Astro 7.0.6

### `npm run build`

```
22:05:25 [build] output: "static"
generating static routes
  ├─ /about/index.html
  ├─ /projects/dcf/index.html
  ├─ /projects/digimix/index.html
  ├─ /projects/xgboost-bots/index.html
  ├─ /index.html
[build] 5 page(s) built in 491ms
[build] Complete!
```

Result: PASS — 5 pages, `_template.md` correctly excluded from the build.

### `npx astro check`

```
Result (11 files):
- 0 errors
- 0 warnings
- 0 hints
```

Result: PASS. (Initial run showed 13 deprecation hints — `z` from
`astro:content` and `z.string().url()`; fixed by importing `z` from
`astro/zod` and using `z.url()`.)

### Add-a-page test

Copied `_template.md` → `test-project.md` with `draft: false`, rebuilt:

```
  ├─ /projects/test-project/index.html
[build] 6 page(s) built in 1.27s

occurrences of href="/projects/test-project/" in dist/index.html: 2   (nav + card)
occurrences in dist/projects/dcf/index.html: 1                        (nav)
```

Result: PASS — one new .md file produced a new page, home card, and nav
link on every page with no other edits. Test file deleted afterwards;
rebuild back to 5 pages.

### Deploy

Not yet run — pending first push to GitHub (Actions workflow in
`.github/workflows/deploy.yml`).

## 2026-07-10 — astro-haze theme port

Applied the visual system from https://github.com/kpab/astro-haze (MIT):
tokens + glass.css + AuroraBackground + ThemeToggle, re-skinned all
components. Architecture unchanged.

### `npm run build` + `npx astro check`

```
[build] 5 page(s) built in 3.20s
Result (13 files): 0 errors, 0 warnings, 0 hints
```

Result: PASS.

### Theme markers in built home page

```
aurora-background: 2   glass-nav: 1   theme-toggle: 3
data-theme: 6          glass-card: 3  glass-panel: 1
```

Result: PASS — aurora, glass nav, toggle, and FOUC script all present.

### Add-a-page regression

```
home-page links to test-project: 2   (nav + card)
rebuild after cleanup: 5 page(s)
```

Result: PASS. Stale-token grep over src/: no matches.

## 2026-07-11 — IA restructure (Website demands.pdf)

Applied the PDF's information architecture: clean nav (Portfolio / Resume /
Blog), Portfolio grouped into Tech & Finance with an "ML growth diary"
sub-group, new Blog, Resume PDF-embed page, homepage intro + avatar + contact.
Added `category`/`group`/`wip` to the projects schema and a `blog` collection.

### `npm run build` + `npx astro check`

```
[build] 13 page(s) built in 801ms
  (home, portfolio, resume, blog index + welcome, 7 project pages)
Result (16 files): 0 errors, 0 warnings, 0 hints
```

Result: PASS.

### Content checks (built HTML)

```
portfolio: >Tech< ✓  >Finance< ✓  >ML growth diary< ✓
projects present: SimpleTrader, XGBoost Classifier, XGBoost Regression,
                  arXiv Scraper, DCF Valuation, Research Reports, Digimix (7)
WIP badges: 5
resume: object data="/resume.pdf" + href="/resume.pdf" download ✓
nav tabs: /portfolio/ /resume/ /blog/ only (no /about) ✓
contact: mailto ajmlee28@gmail.com + github.com/AldenLee28 + linkedin ✓
blog index lists: Welcome ✓
stale /about refs in dist/: 0
```

Result: PASS.

### Add-a-page regression (new category flow)

Temp `regression-test.md` (`category: finance`) → appeared under Finance on
`/portfolio/` and built its own page; removed → back to 13 pages.

Result: PASS.

### Not yet supplied (placeholders live)

`public/resume.pdf`, `public/images/profile.jpg`, real LinkedIn URL.
