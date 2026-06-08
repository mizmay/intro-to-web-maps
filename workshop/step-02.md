---
layout: base.njk
title: "Step 2: Initialize the Map"
step: 2
---

Open `index.html` in your editor. You'll see a bare HTML shell — just a doctype, a `<head>` with a title, and an empty `<body>`. By the end of this step, your chosen basemap will be rendering at `http://127.0.0.1:1234/`.

## Add the MapLibre Stylesheet

In the `<head>`, add the MapLibre GL JS stylesheet:

```html
<link rel="stylesheet" href="lib/maplibre-gl.5.24.0.css">
```

This provides the default controls styling (zoom buttons, compass).

## Size the Map

Still in the `<head>`, add a `<style>` block to make the map fill the viewport:

```html
<style>
  body { margin: 0; }
  #map { width: 100vw; height: 100vh; }
</style>
```

## Add the Map Container

In the `<body>`, add the div MapLibre will render into:

```html
<div id="map"></div>
```

## Load the Libraries

Just before the closing `</body>` tag, load PMTiles first, then MapLibre:

```html
<script src="lib/pmtiles.4.3.0.js"></script>
<script src="lib/maplibre-gl.5.24.0.js"></script>
```

PMTiles must load before MapLibre so the protocol handler is available when the map initializes.

## Register the PMTiles Protocol and Initialize the Map

After the script tags, add the initialization block:

```html
<script>
  const protocol = new pmtiles.Protocol();
  maplibregl.addProtocol('pmtiles', protocol.tile);

  const map = new maplibregl.Map({
    container: 'map',
    style: 'basemaps/style-watercolor.json',
    center: [-89.375, 43.1],
    zoom: 11,
    hash: true
  });

  map.addControl(new maplibregl.NavigationControl());
</script>
```

`addProtocol` tells MapLibre how to fetch tiles from `.pmtiles` files via HTTP byte-range requests — this is what makes the terrain hillshade work without a tile server.

Use `style-watercolor.json` if you picked watercolor in Step 1, or `style-imagery.json` if you picked imagery.

**About the style URL:** the basemap styles reference terrain tiles using relative `pmtiles://` paths (e.g., `pmtiles://../sources/raster-dem.pmtiles`). This works because Caddy serves the entire repo from a single origin. If you move the style file to a different origin without the PMTiles files alongside it, the raster layers will fail silently — something to keep in mind when customizing later.

## Complete File

Your `index.html` should now look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Map</title>
  <link rel="stylesheet" href="lib/maplibre-gl.5.24.0.css">
  <style>
    body { margin: 0; }
    #map { width: 100vw; height: 100vh; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="lib/pmtiles.4.3.0.js"></script>
  <script src="lib/maplibre-gl.5.24.0.js"></script>
  <script>
    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);

    const map = new maplibregl.Map({
      container: 'map',
      style: 'basemaps/style-watercolor.json',
      center: [-89.375, 43.1],
      zoom: 11,
      hash: true
    });

    map.addControl(new maplibregl.NavigationControl());
  </script>
</body>
</html>
```

## Verify

Open (or hard-refresh) [http://127.0.0.1:1234/](http://127.0.0.1:1234/). Your chosen basemap should fill the browser window, centered on Madison with terrain hillshade visible. The URL bar should update as you pan and zoom.

If the map is blank:
- Confirm Caddy is still running in your terminal
- Check that the `style:` path matches the basemap file you have in `basemaps/`
- Open the browser console (F12) and look for 404 or CORS errors

The preview files `basemaps/watercolor.html` and `basemaps/imagery.html` use the same initialization pattern — open one in your editor as a reference.

---

**[Previous: Step 1: Verify Setup + Preview Basemaps](../step-01/)** | **[Next: Step 3: Extract + Style Data](../step-03/)**
