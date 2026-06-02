# Intro to Web Maps

A web map of the [Capital City State Trail](https://dnr.wisconsin.gov/topic/parks/capcity/info) in Madison, WI — built with MapLibre GL JS, OSM data, and open tile infrastructure. No API keys. No proprietary platform.

This is the workshop template for **"From OSM Data to a Shareable Map URL"** at SotM US 2026.

---

## What's in this repo

```
intro-to-web-maps/
├── .devcontainer/                    # Codespaces configs
├── break-glass/                      # Shhh... in case something goes wrong
├── lib/                              # Local copies of the libraries and assets the map renderer needs
├── sources/                          # You'll store your map data here
├── .nojekyll                         # Skips Jekyll processing on GitHub Pages
├── Caddyfile                         # Local web server config
├── index.html                        # MapLibre map — edit trail color/width here
├── README.md                         # This document
└── style.json                        # OSM Bright basemap (with OSM US Tileservice)
```

Fork this repo and follow the instructions [here](https://mizmay.github.io/intro-to-web-maps) to complete the workshop.

---

## Stack

- **Basemap:** [OSM Bright GL style](https://github.com/openmaptiles/osm-bright-gl-style) via [OSM US Tileservice](https://openstreetmap.us/our-work/tileservice/)
- **Trail data:** OpenStreetMap relation [2997493](https://www.openstreetmap.org/relation/2997493), extracted with [Overpass Ultra](https://overpass-ultra.trailsta.sh)
- **Renderer:** [MapLibre GL JS](https://maplibre.org/)
- **Terrain:** [Mapterhorn](https://protomaps.com/blog/mapterhorn-terrain/) raster-DEM via PMTiles
- **Hosting:** GitHub Pages (static files, no server required)

---

## License

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
