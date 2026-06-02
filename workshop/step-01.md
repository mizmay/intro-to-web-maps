---
layout: base.njk
title: "Step 1: Verify Setup"
step: 1
---

Before we dive in, let's confirm everyone's environment is working.

## Start Your Local Server

From the `osm-trail-map` directory, run:

```bash
caddy run
```

Keep this terminal open for the rest of the workshop. Caddy will serve your map files at `http://127.0.0.1:1234/`.

## Open the Map

Open [http://127.0.0.1:1234/](http://127.0.0.1:1234/) in your browser.

You should see the OSM Bright basemap centered on Madison, WI — roads, parks, water, and labels, but no trail yet. That's expected; we'll add it in Step 3.

If the basemap isn't loading, raise your hand; we'll sort it out now before moving on.

## What You're Looking At

**`index.html`** initializes a MapLibre GL JS map using the basemap stylesheet. You'll add the trail layer to this file in Step 3.

**`style.json`** is the OSM Bright stylesheet; it defines how the basemap is drawn. It points to the OSM US Tileservice for vector tiles and uses open glyph and sprite resources.

**`sources/`** is where you'll save your trail GeoJSON in Step 2.

---

**[Previous: Setup Instructions](../)** | **[Next: Step 2: Extract Trail Data](../step-02/)**
