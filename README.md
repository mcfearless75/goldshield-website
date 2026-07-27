# Goldshield — static rebuild

Plain HTML/CSS/JS rebuild of goldshieldtech.co.uk, trimmed down for GitHub Pages
(no PHP/MySQL/WordPress — GH Pages only serves static files).

## What changed from the old WordPress site

- **5 pages instead of ~20+.** The old site had a separate page per pack size
  (e.g. 4 near-identical pages for hand sanitiser alone, each with "Also
  available in sizes: XXX" left in as an unfinished placeholder). Products are
  now one page per product line with a pack-size table.
- **Markets page de-duplicated.** The homepage repeated the full 20-sector list
  twice with inconsistent sub-tags. Now there's one clean sector grid, linked
  from the homepage teaser.
- **Fixed the phone number mismatch.** Header/footer showed the same visible
  number but linked two different `tel:` numbers. Standardised on
  +44 (0) 1908 973260 throughout — confirm this is still correct.
- **Dropped the WordPress/Elementor/Divi/plugin bloat** (~182MB of uploads,
  238MB database, unused themes and plugins) since none of it is needed for a
  static site. Real content (science, accreditations, studies) was kept.
- Legal pages (Cookie Policy, Privacy Policy, Terms, FAQ) were **not** ported
  over in this pass — say the word and I'll add them back.

## Before you go live

1. **Contact form.** `contact.html` posts to a Formspree placeholder
   (`https://formspree.io/f/YOUR_FORM_ID`). Sign up free at
   [formspree.io](https://formspree.io), create a form, and replace
   `YOUR_FORM_ID` with your real endpoint. Without this, the form won't
   deliver enquiries anywhere.
2. **Verify the phone number and address** against current details — pulled
   from the live site as of July 2026.
3. Optional: add a `CNAME` file containing `goldshieldtech.co.uk` when you're
   ready to point the domain at GitHub Pages (not included yet, per your call
   to stay on a github.io URL for now).

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
