---
layout: base.njk
title: "Step 4: Swap in Custom Icons"
step: 4
---

Your map works with circles. Now give it character: swap the circle layer for custom SVG icons that match your dataset. You'll change only the *look* of the layer; its `id` and `source` stay the same, so the popup and cursor handlers from Step 3 keep working untouched.

The repo already includes two icons in `icons/`:
- `littlefreelibrary.svg` (Little Free Libraries)
- `mounds-shadow.svg` (Effigy Mounds)

<div class="break-glass">

`break-glass/index-lfl.html` and `break-glass/index-mounds.html` are complete working reference implementations with the custom icons in place.

</div>

## Load the SVG Helper

MapLibre needs SVGs turned into images before it can use them as icons. A small helper, `lib/load-svg.js`, does that. Add it to the `<head>` of `index.html`, right after the PMTiles script:

```html
<script src="lib/pmtiles.4.3.0.js"></script>
<script src="lib/load-svg.js"></script>
```

## Make the Load Handler Async

Loading an SVG takes a moment, so `loadSVG` doesn't hand back the image directly. It returns a **promise**: a placeholder for a value that isn't ready yet. Putting `await` in front waits for the promise to resolve to the real image before moving on, and `await` only works inside an `async` function, so add `async` to your load handler:

```javascript
map.on('load', async function() {
```

Everything inside the handler stays where it is.

## Register the Icon

As the **first line inside** `map.on('load', ...)`, before `addSource`, register your icon image. Use the one for your dataset:

**Little Free Libraries:**
```javascript
  map.addImage('littlefreelibrary', await loadSVG('icons/littlefreelibrary.svg'));
```

**Effigy Mounds:**
```javascript
  map.addImage('mound', await loadSVG('icons/mounds-shadow.svg'));
```

The first argument is the image name you'll reference in the layer; the second is the path to the SVG file.

## Swap the Layer to Icons

In your `addLayer` call, change two things: the `type` from `circle` to `symbol`, and replace the `paint` block with a `layout` block. Keep the same `id` and `source`.

**Little Free Libraries:**
```javascript
  map.addLayer({
    id: 'littlefreelibraries',
    type: 'symbol',
    source: 'littlefreelibraries',
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
    id: 'mounds',
    type: 'symbol',
    source: 'mounds',
    layout: {
      'icon-image': 'mound',
      'icon-size': ['interpolate', ['linear'], ['zoom'], 10, 0.25, 16, 0.75],
      'icon-allow-overlap': true
    }
  });
```

A few notes:

- `icon-image` must match the name you gave in `addImage` (here `littlefreelibrary`, singular, matching the SVG file; the layer `id` is the plural `littlefreelibraries`).
- In the sample style logic, `icon-size` scales the icon with zoom. You can play around with these values to change the size of the icon at various scales. The mounds icon starts from a larger SVG, so it uses smaller values.
- `icon-allow-overlap: true` lets every icon draw even when points crowd together; otherwise MapLibre hides the ones that collide.
- The `id` and `source` are unchanged from Step 3, so your click and cursor handlers still match. You only changed how the layer looks.

## Verify

Hard-refresh your map (`Cmd+Shift+R` / `Ctrl+Shift+R`). Your custom icons should replace the circles and grow as you zoom in. Click one: the popup should still open. Hover: the cursor should still change to a pointer.

If the icons don't appear:
- Open the console (F12). A "missing image" warning means `icon-image` doesn't match the name in `addImage`.
- Confirm the `<script src="lib/load-svg.js"></script>` tag is in the `<head>` and your handler reads `async function`.
- Check the SVG path in `addImage` resolves (no 404 in the Network tab).

## Optional: Show the Icon in the Popup

Want your popup to match the break-glass reference? You can drop the icon in as a thumbnail. This is optional; skip it if you're short on time.

Replace the `.setHTML(...)` call in your **Little Free Libraries** click handler with this version, which wraps the text in a flex row next to the icon:

```javascript
    .setHTML(
      '<div style="display:flex;align-items:flex-start;gap:0.5rem">' +
        '<img src="icons/littlefreelibrary.svg" width="48" height="48" alt="">' +
        '<div>' +
          '<strong>' + (props.name || 'Little Free Library') + '</strong><br>' +
          '<a href="https://www.openstreetmap.org/node/' + props.osm_id + '" target="_blank">View on OSM</a>' +
          (props.operator ? '<br>Operator: ' + props.operator : '') +
        '</div>' +
      '</div>'
    )
```

The `<img>` points at the same SVG file you registered with `addImage`. For Effigy Mounds, use `icons/mounds-shadow.svg` and your own popup fields.

Hard-refresh and click a point: the icon now appears beside the text.

## Commit Your Work

You edited `index.html` again. Commit and push it to your fork as before: the **Source Control panel**, or `git add index.html` → commit → push.

---

**[Previous: Step 3: Add Data Layer + Popup](../step-03/)** | **[Next: Step 5: Publish to GitHub Pages](../step-05/)**
