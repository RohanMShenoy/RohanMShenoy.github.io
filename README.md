# Rohan M. Shenoy — Academic Website

A personal academic website modelled closely after **math.mit.edu/~rigollet/**,
built with plain HTML, CSS, and a small vanilla-JS script. No build tools or
frameworks required — just drop the files into your repository and it works.

## File structure

```
rohan-site/
├── index.html      ← Main page (all sections in one file)
├── style.css       ← All styling, including dark-mode variables
├── script.js       ← Dark-mode toggle + active-nav scroll tracking
├── profile.JPG     ← Your profile photo (add this yourself)
└── README.md       ← This file
```

## Customising the content

Open `index.html` and find the placeholder text to replace:

| Placeholder | Replace with |
|---|---|
| `[Your University]` | e.g. *Princeton University* |
| `[Advisor's Name]` | e.g. *Prof. Jane Smith* |
| `[Your University, Mathematics]` | Sidebar affiliation link text |
| `[specific research area]` | Your main research topic |
| `[field A]` / `[field B]` | Interplay description |
| `[Research Group or Center]` | Any lab/center affiliation |
| `[ArXiv IDs]`, `[XXXX.XXXXX]` | Real arXiv identifiers |
| Email / office / links | Your actual contact details |

## Profile photo

Replace `profile.JPG` with your own photo. The sidebar uses it as a small
circular thumbnail (`80 × 80 px`) and the about section shows it as a portrait
(`190 × 240 px`). Any aspect ratio works — CSS handles cropping.

## Featured-work images

In `index.html` each `.work-card` has a `.work-img-wrap` div containing a
placeholder symbol. To use a real image, replace:

```html
<div class="work-img-placeholder">&#8731;</div>
```

with:

```html
<img src="images/my-figure.png" alt="Description of figure" />
```

## Dark mode

The toggle in the top-right corner switches between light and dark themes and
remembers the user's choice in `localStorage`. It also respects the OS
`prefers-color-scheme` setting on first load.

## Colours

All colours are CSS custom properties in `:root` (and `[data-theme="dark"]`)
at the top of `style.css`. To change the accent colour (default: deep crimson
`#8b0000`), update `--accent` and `--accent-hover`.

## Fonts

The site uses **EB Garamond** (serif, body and headings) and
**Source Sans 3** (sans-serif, labels and UI text), loaded from Google Fonts.
To use self-hosted fonts instead, replace the `<link>` in the `<head>` and
update the `--font-serif` / `--font-sans` variables in `style.css`.

## Deploying to GitHub Pages

1. Rename your repository to `<username>.github.io`.
2. Push all files to the `main` branch.
3. Go to **Settings → Pages** and set source to **main / (root)**.
4. Your site will be live at `https://<username>.github.io/` within a minute.
