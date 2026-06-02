# Workshop Instruction Pages

This branch contains the workshop instruction materials for **"Introduction to Web Maps"** at SotM US 2026.

## Branch Structure

This is the `workshop-instructions` branch. The instruction pages are built using [Eleventy](https://www.11ty.dev/) and published via GitHub Pages from this branch.

**Note:** This branch is for maintaining workshop instruction materials only. Attendees should fork the `main` branch, which contains the starter files they need.

## Directory Structure

```
intro-to-web-maps/
├── README.md                     # This file
├── .eleventy.js                  # Eleventy build configuration
├── package.json                  # Build dependencies
└── workshop/                     # Instruction pages source
    ├── _data/
    │   └── workshop.json         # Workshop metadata and step list
    ├── _includes/
    │   └── base.njk              # Base layout template (sidebar nav, footer)
    ├── index.md                  # Setup instructions and workshop overview (rendered as /workshop/)
    ├── step-01.md                # Step 1: Verify Setup
    ├── step-02.md                # Step 2: Extract Trail Data with Overpass Ultra (pending)
    ├── step-03.md                # Step 3: Render the Map and Add Your Trail Layer (pending)
    ├── step-04.md                # Step 4: Publish to GitHub Pages (pending)
    ├── step-05.md                # Step 5: Add Terrain (Hillshade) (pending)
    ├── step-06.md                # Step 6 (bonus): Add Interactivity (pending)
    └── workshop.css              # Styles for instruction pages
```

## Building the Workshop Site

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

Eleventy reads the Markdown files in `workshop/`, processes them through the Nunjucks templates, and outputs HTML in place. The built HTML files are committed alongside the source — GitHub Pages serves them directly.

### Preview locally

```bash
npm run serve
```

Opens a live-reload server at `http://localhost:8080/`.

## Deployment

GitHub Pages is configured to serve from the `workshop-instructions` branch, root directory. The built HTML files in `workshop/` are committed and pushed; no CI build step is needed.

## Editing Instructions

### Adding or editing a step

1. Edit (or create) the relevant `workshop/step-XX.md` file.
2. Run `npm run build` to regenerate the HTML.
3. Commit both the `.md` source and the updated `step-XX/index.html` output.
4. Update `workshop/_data/workshop.json` if adding a new step (controls sidebar nav order and titles).

### Frontmatter fields

```yaml
---
layout: base.njk
title: "Step N: Your Title"
step: N          # matches the step number in workshop.json; use 'prereqs' for prerequisites page
---
```

### Navigation links

Each page ends with a nav line that `extractNav` pulls into the sidebar slot:

```markdown
**[Previous: Step N-1 — Title](../step-0N-1/)** | **[Next: Step N+1 — Title](../step-0N+1/)**
```

Use `<hr>` immediately before the nav line so the filter can locate it.
