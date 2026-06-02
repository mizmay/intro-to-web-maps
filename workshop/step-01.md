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

You should see:
- The OSM Bright basemap centered on Madison, WI
- The Capital City State Trail drawn in green over the basemap

If anything isn't loading, raise your hand — we'll sort it out now before moving on.

## What You're Looking At

**`index.html`** initializes a MapLibre GL JS map and adds the trail as a GeoJSON layer on top of the basemap.

**`style.json`** is the OSM Bright stylesheet — it defines how the basemap (roads, parks, water, labels) is drawn. It points to the OSM US Tileservice for vector tiles and uses open glyph and sprite resources.

**`sources/capital_city_trail.geojson`** is the trail geometry extracted from OpenStreetMap. You'll learn how this was created — and how to create your own — in Step 2.

---

**[Previous: Before You Arrive](../prerequisites/)** | **[Next: Step 2 — Extract Trail Data](../step-02/)**
