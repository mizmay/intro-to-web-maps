# Intro to Web Maps

A workshop template for **"From OSM Data to a Shareable Map URL"** at SotM US 2026.

You'll build a web map of OSM data from scratch — choosing a basemap, extracting and styling data with Overpass Ultra, and publishing on GitHub Pages. No API keys. No proprietary platform.

Fork this repo and follow the workshop instructions at [mizmay.github.io/intro-to-web-maps](https://mizmay.github.io/intro-to-web-maps).

---

## What's in this repo

```
intro-to-web-maps/
├── basemaps/              # Two basemap styles to choose from
│   ├── style-watercolor.json
│   ├── style-imagery.json
│   ├── watercolor.html    (preview)
│   └── imagery.html       (preview)
├── break-glass/           # Reference implementations + fallback data
├── lib/                   # MapLibre GL JS and PMTiles (local copies)
├── sources/               # Your map data goes here
│   ├── raster-dem.pmtiles
│   ├── raster-imagery.pmtiles
│   └── raster-map.pmtiles
├── .nojekyll              # Skips Jekyll processing on GitHub Pages
├── Caddyfile              # Local web server config
└── index.html             # Start here — you'll build this out during the workshop
```

---

## Running locally

```bash
caddy run
```

Then open `http://localhost:1234/`.

---

## Stack

- **Basemaps:** Stamen Watercolor and USDA NAIP Imagery, composed with OSM vector tiles via [OSM US Tileservice](https://openstreetmap.us/our-work/tileservice/) and terrain hillshade via [Mapterhorn](https://protomaps.com/blog/mapterhorn-terrain/)
- **Data extraction:** [Overpass Ultra](https://overpass-ultra.trailsta.sh)
- **Renderer:** [MapLibre GL JS](https://maplibre.org/)
- **Hosting:** GitHub Pages

---

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
