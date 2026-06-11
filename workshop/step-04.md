---
layout: base.njk
title: "Step 4: Swap in Custom Icons"
step: 4
---

Your map works with circles. Now give it character: swap the circle layer for custom SVG icons that match your dataset. You'll change only the *look* of the layer; its `id` and `source` stay the same, so the popup and cursor handlers from Step 3 keep working untouched.

The repo already includes two icons in `basemaps/icons/`:
- `littlefreelibrary.svg` (Little Free Libraries)
- `mounds-shadow.svg` (Effigy Mounds)

**Break glass:** `break-glass/index-lfl.html` and `break-glass/index-mounds.html` are complete working reference implementations with the custom icons in place.

## Load the SVG Helper

MapLibre needs SVGs turned into images before it can use them as icons. A small helper, `lib/load-svg.js`, does that. Add it to the `<head>` of `index.html`, right after the PMTiles script:

```html
<script src="lib/pmtiles.4.3.0.js"></script>
<script src="lib/load-svg.js"></script>
```

## Make the Load Handler Async

`loadSVG` returns a promise, so you'll `await` it. Add the word `async` to your load handler:

```javascript
map.on('load', async function() {
```

Everything inside the handler stays where it is.

## Register the Icon

As the **first line inside** `map.on('load', ...)`, before `addSource`, register your icon image. Use the one for your dataset:

**Little Free Libraries:**
```javascript
  map.addImage('littlefreelibrary', await loadSVG('basemaps/icons/littlefreelibrary.svg'));
```

**Effigy Mounds:**
```javascript
  map.addImage('mound', await loadSVG('basemaps/icons/mounds-shadow.svg'));
```

The first argument is the image name you'll reference in the layer; the second is the path to the SVG file.

## Swap the Layer to Icons

In your `addLayer` call, change two things: the `type` from `circle` to `symbol`, and replace the `paint` block with a `layout` block. Keep the same `id` and `source`.

**Little Free Libraries:**
```javascript
  map.addLayer({
    id: 'points-circles',
    type: 'symbol',
    source: 'points',
    layout: {
      'icon-image': 'littlefreelibrary',
      'icon-size': ['interpolate', ['linear'], ['zoom'], 10, 0.7, 16, 2],
      'icon-allow-overlap': true
    }
  });
```

**Effigy Mounds:**
```javascript
  map.addLayer({
    id: 'points-circles',
    type: 'symbol',
    source: 'points',
    layout: {
      'icon-image': 'mound',
      'icon-size': ['interpolate', ['linear'], ['zoom'], 10, 0.25, 16, 0.75],
      'icon-allow-overlap': true
    }
  });
```

A few notes:

- `icon-image` must match the name you gave in `addImage`.
- `icon-size` scales the icon with zoom: `10, 0.7, 16, 2` means size `0.7` at zoom 10 growing to `2` at zoom 16. The mounds icon starts from a larger SVG, so it uses smaller values.
- `icon-allow-overlap: true` lets every icon draw even when points crowd together; otherwise MapLibre hides the ones that collide.
- The layer `id` stays `points-circles`, so your click and cursor handlers from Step 3 still match. (The name is a bit of a misnomer now, but keeping it means nothing else has to change.)

## Verify

Hard-refresh your map (`Cmd+Shift+R` / `Ctrl+Shift+R`). Your custom icons should replace the circles and grow as you zoom in. Click one: the popup should still open. Hover: the cursor should still change to a pointer.

If the icons don't appear:
- Open the console (F12). A "missing image" warning means `icon-image` doesn't match the name in `addImage`.
- Confirm the `<script src="lib/load-svg.js"></script>` tag is in the `<head>` and your handler reads `async function`.
- Check the SVG path in `addImage` resolves (no 404 in the Network tab).

## Commit Your Work

You edited `index.html` again. Commit and push it to your fork as before: the **Source Control panel**, or `git add index.html` → commit → push.

---

**[Previous: Step 3: Add Data Layer + Popup](../step-03/)** | **[Next: Step 5: Publish to GitHub Pages](../step-05/)**
