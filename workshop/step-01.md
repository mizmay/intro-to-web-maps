---
layout: base.njk
title: "Step 1: Verify Setup + Preview Basemaps"
step: 1
---

Let's confirm everything is working and take a first look at the map.

## Start Your Local Server

From the `intro-to-web-maps` directory, run:

```bash
caddy run
```

Keep this terminal open for the rest of the workshop.

## Open the Map

Open your map in the browser:

- **Local setup:** go to [http://127.0.0.1:1234/](http://127.0.0.1:1234/).
- **Codespaces:** click **Open in Browser** on the forwarded-port notification. If it doesn't appear (it only shows the first time the port is forwarded), open the **Ports** panel in the bottom panel and click the globe icon next to port 1234. Your map opens at a `https://…app.github.dev/` URL unique to your Codespace.

You'll see NAIP aerial imagery of the Madison area with terrain hillshade. That's your starting point: `index.html` is already initialized with the imagery basemap.

## Read the Initialization Code

Click on `index.html` to open it in VS Code or open it your editor of choice. Here's what's there and why:

```javascript
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol('pmtiles', protocol.tile.bind(protocol));
```

This registers a `pmtiles://` URL protocol. MapLibre uses it to load tile data from `.pmtiles` files via HTTP byte-range requests, no tile server needed.

```javascript
const map = new maplibregl.Map({
  container: 'map',
  style: 'basemaps/style-imagery.json',
  center: [-89.375, 43.1],
  zoom: 11,
  ...
});
```

`style:` points to a JSON file in `basemaps/` that defines what the map looks like: colors, fonts, layer order, tile sources. The rest of the options constrain the map to the Madison area.

That file follows the [MapLibre Style Spec](https://maplibre.org/maplibre-style-spec/), the format that describes every MapLibre map: its sources, layers, and how each layer is drawn. It's the reference you'll keep coming back to. Skim it once now, you'll use it in every step that follows.

## Preview the Watercolor Basemap

Change `'basemaps/style-imagery.json'` to `'basemaps/style-watercolor.json'` in `index.html`, save, and hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`).

**NAIP Imagery:** USDA aerial photography (2022). Literal and photographic.

**Watercolor:** Stamen Watercolor (CC BY 3.0). Painterly, impressionistic.

Both include terrain hillshade from [Mapterhorn](https://protomaps.com/blog/mapterhorn-terrain/). South-central Wisconsin is a glacial plain; the relief is subtle.

## Choose One

Set the `style:` value back to your preferred basemap and save.

You can swap at any time.

## How This Workshop Works

A few conventions before we move on:

**Break-glass boxes.** When a live tool is flaky or you fall behind, a red box like the one below points you to a working fallback in the repo. You never *need* it to complete the steps, but it's there if you get stuck.

<div class="break-glass">

This is what a break-glass box looks like. It names the file or fallback to reach for so you can rejoin the group.

</div>

**Commit after every change.** At the end of Steps 2, 3, and 4 you'll commit and push your work to your fork. Committing as you go means your progress is saved and ready to publish in Step 5, and you can always get back to a working state.

**Keep your browser tab open.** Once your map is open (next section), leave that tab open for the whole workshop. It's served by the local Caddy server you're about to start, so you'll just hard-refresh it to see each change rather than reopening it.

---

**[Previous: Setup Instructions](../)** | **[Next: Step 2: Extract + Style Data](../step-02/)**
