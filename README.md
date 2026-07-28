# Goldshield

A modern rebuild of [goldshieldtech.co.uk](https://goldshieldtech.co.uk) — the
patented, water-stabilised antimicrobial technology that protects hands,
surfaces, laundry and masks between uses, without harsh chemicals.

This replaces the previous plain-HTML rebuild (see git history) with a
component-based Next.js build — the same architecture already used for
[puracator.co.uk](https://puracator.co.uk). Content, copy, imagery and visual
design are carried over 1:1 from the previous static site; only the
underlying plumbing changed.

## Why the rewrite

The static HTML version duplicated its `<style>` block across all five pages.
That caused two real bugs in production: a missing mobile grid rule left the
contact cards squeezed past the viewport, and the trust-strip icons
misaligned because each row was centred independently. Shared components make
both bug classes structurally impossible going forward, and a single
`lib/site.ts` file means content (address, phone, products, markets) only
needs updating in one place.

## Tech stack

- **[Next.js 15](https://nextjs.org)** (App Router) with **static export** —
  ships pure HTML/CSS/JS, deployable to any static host.
- **React 19** + **TypeScript**.
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-first `@theme` config).
- Self-hosted **GillSans** brand font (as used on the original site).
- Accessible by default: semantic landmarks, skip link, keyboard-friendly nav,
  reduced-motion support, focus-visible outlines.

## Pages

| Route | File served | Purpose |
| --- | --- | --- |
| `/` | `index.html` | Hero slider, trust strip, technology, accreditations, product tabs, markets, contact |
| `/about` | `about.html` | Philosophy, story, science, the difference, feature boxes, full approvals table |
| `/products` | `products.html` | All four product categories (hands, surfaces, laundry, masks) |
| `/markets` | `markets.html` | 19 industry sectors — grid + detail list |
| `/contact` | `contact.html` | Contact details, enquiry form (Formspree), map |

`trailingSlash: false` makes the static export emit `about.html`,
`products.html` etc. directly at the root — matching the URLs already
indexed in the live `sitemap.xml`, so no redirects were needed for the
rebuild.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment — GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it with the official
`actions/deploy-pages` flow.

- **Custom domain** (`goldshieldtech.co.uk`): `public/CNAME` is committed, so
  the workflow always builds with an empty base path (assets resolve at the
  root). DNS and the HTTPS certificate were already configured for this repo
  before the rebuild and are unaffected by it.
- A `.nojekyll` file is included so GitHub Pages serves the Next.js `_next/`
  assets directory correctly.

## Contact form

`contact.html`'s form posts to the same live Formspree endpoint
(`https://formspree.io/f/xpwzgkqb`) as the previous build — no placeholder to
swap.

## Content note

The registered/contact email (`info@atriumgs.co.uk`) is carried over
unchanged from the previous build — it matches Atrium GS, the parent/holding
company, and is not a typo.
