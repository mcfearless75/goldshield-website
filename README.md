# Goldshield — static rebuild

Plain HTML/CSS/JS rebuild of goldshieldtech.co.uk for GitHub Pages (no
PHP/MySQL/WordPress — GH Pages only serves static files). Built on top of the
April 2026 recreation (`mcfearless75/goldshield-site`), which is a faithful,
near pixel-for-pixel match of the live WordPress site — real brand assets
(GillSans font, all 4 accreditation logos, market sector photography, a
working Formspree contact form), not a fresh redesign.

## What this pass added on top

- **Flat file structure** (`index.html`, `about.html`, `products.html`,
  `markets.html`, `contact.html`) instead of folder + root-absolute links
  (`/about-us/`). The original structure only works once the site sits at a
  domain root — on a GitHub Pages project URL
  (`username.github.io/repo-name/`) those links 404. Flat relative links work
  in both places, so no changes are needed at the domain flip.
- **Fixed the mobile hamburger menu** — the button existed but had no JS
  behind it, so mobile visitors couldn't navigate. Added a working slide-out
  panel with keyboard (Esc) and focus support.
- **Full SEO layer**: canonical URLs, Open Graph/Twitter cards, JSON-LD
  (Organization, Products, Breadcrumbs), `robots.txt`, `sitemap.xml`, a proper
  favicon/icon set, and a web manifest.
- **Accessibility**: skip-to-content link, `aria-current`/`aria-expanded`/
  `aria-selected` on nav and tabs, focus-visible outlines, alt text audit,
  `prefers-reduced-motion` support.
- **Performance**: explicit `width`/`height` on every image (prevents layout
  shift), `loading="lazy"` below the fold, WebP versions of the four hero
  slider images.
- Corrected the footer distributor line to **Evotek Innovations** (matches
  the April build; the WordPress site had inconsistent attribution).

## Before you go live

1. **Verify the phone number and address** are still current.
2. Add a `CNAME` file containing `goldshieldtech.co.uk` when you're ready to
   point the domain at GitHub Pages (not included yet — DNS/domain transfer
   is in progress separately).
3. Legal pages (Cookie Policy, Privacy Policy, Terms, FAQ) aren't ported over
   — say the word and they can be added.
4. Consider wiring up the EPA/FDA/EU/Goldshield accreditation logos with
   `<picture>`/WebP if page weight becomes a concern — currently plain PNG.

## Contact form

`contact.html` already posts to a live Formspree endpoint
(`https://formspree.io/f/xpwzgkqb`) — no placeholder to swap.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial static rebuild"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Source → Deploy from a
branch → `main` / `(root)`**. Your site will be live at
`https://<username>.github.io/<repo-name>/` within a minute or two.

No build step, no dependencies — it's just static files.
