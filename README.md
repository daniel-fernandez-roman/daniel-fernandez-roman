# daniel-fernandez-roman.github.io

Personal / academic website for Daniel Fernández Román (PhD candidate, CIM-UVIGO),
built as a static site and served with GitHub Pages.

## Structure

```
index.html          Home
research.html        Research lines
publications.html    Papers & talks
cv.html               Education / experience / skills
contact.html          Contact info & links
404.html               Custom not-found page
assets/styles.css     Styles (single stylesheet, CSS variables for theming)
assets/main.js         Mobile nav toggle + footer year
favicon.svg
robots.txt / sitemap.xml
```

No build step — plain HTML/CSS/JS. Push to the default branch and GitHub Pages
serves it directly (`.nojekyll` disables Jekyll processing).

## Content still to fill in

A few placeholders were left on purpose (shown in *italics* on the site) —
search the HTML for `TODO` / `class="placeholder"` to find them all:

- **contact.html** — Google Scholar link, ORCID iD
- **cv.html** — education entries (BSc/MSc), earlier experience, link to a PDF CV
- **publications.html** — Google Scholar / ORCID links, any manuscript in progress

Everything else (bio, affiliation, the 2025 ISME Communications paper, the 2024
conference talk) was pulled from your public GitHub profile and publication
record — double-check it reads the way you want.

## Theming

Colors, spacing and radii are CSS variables at the top of `assets/styles.css`
(`:root { ... }`) — change them there to restyle the whole site at once.

## Adding a page

Copy an existing page (e.g. `research.html`), update the `<title>`/meta tags,
set `aria-current="page"` on the matching nav link, and add the new URL to
`sitemap.xml`.
