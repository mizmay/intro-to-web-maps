# Intro to Web Maps

The workshop template for **"Introduction to Web Maps"** at SotM US 2026.

You'll build a web map from scratch: choosing a basemap built with OSM and other open source data, extracting and styling OSM data with Overpass Ultra, and publishing on GitHub Pages. No API keys. No proprietary platform.

Fork this repo to create a copy in your own account and follow the workshop instructions [here](https://mizmay.github.io/intro-to-web-maps/workshop/).

---

## What's in this repo

```
intro-to-web-maps/
├── basemaps/              # Two basemap styles to choose from
│   ├── style-watercolor.json
│   └── style-imagery.json
├── break-glass/           # Reference implementations + fallback data
├── icons/                 # Custom SVG point icons (added to the map in Step 4)
├── lib/                   # MapLibre GL JS and PMTiles (local copies)
├── sources/               # Your map data goes here
│   ├── raster-imagery.pmtiles
│   └── raster-map.pmtiles
├── .nojekyll              # Skips Jekyll processing on GitHub Pages
├── Caddyfile              # Local web server config
└── index.html             # Start here — you'll build this out during the workshop
```

---

## Stack

- **Basemaps:** Stamen Watercolor and USDA NAIP Imagery, composed with OSM vector tiles via [OSM US Tileservice](https://openstreetmap.us/our-work/tileservice/) and terrain hillshade via [Mapterhorn](https://protomaps.com/blog/mapterhorn-terrain/)
- **Data extraction:** [Overpass Ultra](https://overpass-ultra.trailsta.sh)
- **Renderer:** [MapLibre GL JS](https://maplibre.org/)
- **Hosting:** GitHub Pages

---

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
