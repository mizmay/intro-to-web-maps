# osm-trail-map

A standalone web map of the [Capital City State Trail](https://dnr.wisconsin.gov/topic/parks/capcity/info) in Madison, WI — built with MapLibre GL JS, OSM data, and open tile infrastructure. No API keys. No proprietary platform.

This is the workshop template for **"From OSM Data to a Shareable Map URL"** at SotM US 2026.

---

## What's in this repo

```
osm-trail-map/
├── index.html                        # MapLibre map — edit trail color/width here
├── style.json                        # OSM Bright basemap (OSM US Tileservice)
├── Caddyfile                         # Local web server config
├── .nojekyll                         # Skips Jekyll processing on GitHub Pages
└── sources/
    └── capital_city_trail.geojson    # Trail geometry from OpenStreetMap
```

`sources/madison_terrain.pmtiles` is **not included** — you'll download it during Step 5 of the workshop. See the extract command below.

---

## Run locally

You need [Caddy](https://caddyserver.com/docs/install) installed (`caddy version` to verify).

```bash
git clone https://github.com/YOUR-USERNAME/osm-trail-map
cd osm-trail-map
caddy run
```

Open `http://127.0.0.1:1234/` in your browser.

---

## Customize the trail style

Open `index.html` and edit the constants at the top of the `<script>` block:

```javascript
const TRAIL_COLOR  = '#2b7a3b';   // any CSS color
const TRAIL_WIDTH  = 4;            // pixels
const TRAIL_DASH   = [2, 2];       // [dash length, gap length] — remove for solid line
```

---

## Add terrain (Step 5)

Download the Mapterhorn raster-DEM terrain tiles for the Madison area:

```bash
pmtiles extract \
  --minzoom=10 --maxzoom=16 \
  --bbox=-89.50,43.00,-89.28,43.11 \
  https://download.mapterhorn.com/planet.pmtiles \
  sources/madison_terrain.pmtiles
```

Requires the [PMTiles CLI](https://docs.protomaps.com/pmtiles/cli). Then add the terrain source and hillshade layer via Maputnik (workshop Step 5).

---

## Stack

- **Basemap:** [OSM Bright GL style](https://github.com/openmaptiles/osm-bright-gl-style) via [OSM US Tileservice](https://openstreetmap.us/our-work/tileservice/)
- **Trail data:** OpenStreetMap relation [2997493](https://www.openstreetmap.org/relation/2997493), extracted with [Overpass Ultra](https://overpass-ultra.trailsta.sh)
- **Renderer:** [MapLibre GL JS](https://maplibre.org/) v5.10.0
- **Terrain:** [Mapterhorn](https://protomaps.com/blog/mapterhorn-terrain/) raster-DEM via PMTiles
- **Hosting:** GitHub Pages (static files, no server required)

---

## License

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
