---
layout: base.njk
title: "Step 1: Verify Setup + Preview Basemaps"
step: 1
---

Let's confirm your environment is working and take a first look at the two basemaps you'll choose between.

## Start Your Local Server

From the `intro-to-web-maps` directory, run:

```bash
caddy run
```

Keep this terminal open for the rest of the workshop. Caddy serves your map files at `http://127.0.0.1:1234/`.

## Open the Starting Point

Open [http://127.0.0.1:1234/](http://127.0.0.1:1234/) in your browser.

You'll see a blank page — that's expected. `index.html` is a bare HTML shell with no map code yet. You'll build it step by step over the next four steps.

If you see a server error instead of a blank page, raise your hand; we'll sort it out before moving on.

## Preview the Basemaps

The `basemaps/` folder contains two complete, working map previews. Open both in your browser:

- [http://127.0.0.1:1234/basemaps/watercolor.html](http://127.0.0.1:1234/basemaps/watercolor.html)
- [http://127.0.0.1:1234/basemaps/imagery.html](http://127.0.0.1:1234/basemaps/imagery.html)

These are standalone files, not the map you're building. They're here so you can preview both styles before committing to one.

**Watercolor** is a painterly, storybook-style basemap. Terrain hillshade bakes in as soft shading. It pairs well with community data — Little Free Libraries, murals, neighborhood amenities.

**NAIP Imagery** is USDA aerial photography from 2022. Terrain hillshade composites over the photograph. It pairs well with landform and cultural-site data — effigy mounds, ecology, geology.

Notice the differences: color palette, level of detail, what context each one adds or hides for your data.

## Choose a Basemap

Pick the one you want to start with. You can swap later — Step 6 covers exactly that.

---

**[Previous: Setup Instructions](../)** | **[Next: Step 2: Initialize the Map](../step-02/)**
