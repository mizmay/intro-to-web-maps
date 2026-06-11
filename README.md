# Intro to Web Maps

A workshop template for **"From OSM Data to a Shareable Map URL"** at SotM US 2026.

You'll build a web map of OSM data from scratch — choosing a basemap, extracting and styling data with Overpass Ultra, and publishing on GitHub Pages. No API keys. No proprietary platform.

Fork this repo and follow the workshop instructions at [mizmay.github.io/intro-to-web-maps](https://mizmay.github.io/intro-to-web-maps).

---

## Setup

Please complete this **before the workshop**. First, **fork this repo**: click **Fork** (top right) on [github.com/mizmay/intro-to-web-maps](https://github.com/mizmay/intro-to-web-maps), then work from your copy at `github.com/YOUR-USERNAME/intro-to-web-maps`.

Then pick one path.

### Path A: GitHub Codespaces (recommended for beginners)

Everything runs in your browser. Caddy and the PMTiles CLI are pre-installed; nothing to install.

1. On your fork: **Code** → **Codespaces** → **Create codespace on main**
2. Wait about 1–2 minutes for the environment to build
3. In the terminal, run `caddy run`
4. When the forwarded-port notification appears, click **Open in Browser**. You should see the Madison imagery basemap.

### Path B: Local Setup

Install three tools, then clone your fork.

| Tool | Purpose | Install |
|---|---|---|
| **Git** | Clone and publish your fork | macOS: `git --version` prompts the Xcode tools install · Windows: [git-scm.com/download/win](https://git-scm.com/download/win) · Linux: `sudo apt install git` |
| **VS Code** | Edit `index.html` (any editor works) | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Caddy** | Serve files locally with byte-range + CORS support (needed for PMTiles) | macOS: `brew install caddy` · Other: [caddyserver.com/docs/install](https://caddyserver.com/docs/install) |

**Optional:** PMTiles CLI (`brew install pmtiles`), only if you want to extract tiles for your own area later. Terrain tiles for the workshop are already in the repo.

Then clone your fork and start the server:

```bash
git clone https://github.com/YOUR-USERNAME/intro-to-web-maps
cd intro-to-web-maps
caddy run
```

Open `http://127.0.0.1:1234/`. You should see the Madison imagery basemap. You're all set.

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
