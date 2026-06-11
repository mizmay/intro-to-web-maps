---
layout: base.njk
title: "Step 3: Add Data Layer + Popup"
step: 3
---

You have a GeoJSON file in `sources/` and now you need to style the points so they show up on the map. You'll do that first in Overpass Ultra, then you'll wire them into the map.

**Break glass:** `break-glass/index-lfl.html` and `break-glass/index-mounds.html` are complete working reference implementations (they use the custom icons you'll add in Step 4, not circles).

## Style the Layer

In the style editor, adjust the marker appearance by copying and pasting this above your Overpass query:

```yaml
---
style:
  layers:
    - type: circle
      paint:
        circle-color: purple
---
```

Click **Run** to see the change.

## Change the Style

Under "Pick a Style", switch the background map to something resembling the basemap you chose in Step 1.

You should see a line like this added to your style logic:

```yaml
  extends: https://tiles.stadiamaps.com/styles/alidade_satellite.json
```
- **Circle color:** pick something that reads against your chosen basemap
- **Circle radius:** in pixels, 6–10 pixels works well at zoom 11
- **Circle opacity:** 0.8–1.0

Click **Run** to see the change.

## Add a Source

In `index.html`, after `map.addControl(...)`, add a `load` handler:

```javascript
map.on('load', function() {
  map.addSource('points', {
    type: 'geojson',
    data: 'sources/little_free_libraries.geojson'  // or effigy_mounds.geojson
  });
});
```

Make sure the file path matches the file you saved in `sources/`.

## Add the Layer

Inside the same `map.on('load', ...)` block, after `addSource`, add a circle layer. Fill in the three paint values you chose in Overpass Ultra:

```javascript
  map.addLayer({
    id: 'points-circles',
    type: 'circle',
    source: 'points',
    paint: {
      'circle-color': 'purple',
      'circle-radius': 8,
      'circle-opacity': 0.9
    }
  });
```

A note on format: in Overpass Ultra you wrote these as YAML (`circle-color: purple`). Here they're a JavaScript object, so the keys and any text values need quotes (`'circle-color': 'purple'`), while numbers like `8` do not. The `source` is already set to `'points'` to match your `addSource`, and the layer `id` is `'points-circles'`; you'll use that id in the handlers below.

## Verify

Hard-refresh your browser tab (`Cmd+Shift+R` / `Ctrl+Shift+R`). Your styled points should appear on the basemap.

## Add a Popup

Still inside `map.on('load', ...)`, after `addLayer`, add a click handler. Use your layer id:

**Little Free Libraries:**
```javascript
map.on('click', 'points-circles', function(e) {
  const props = e.features[0].properties;
  new maplibregl.Popup()
    .setLngLat(e.lngLat)
    .setHTML('<strong>' + (props.name || 'Little Free Library') + '</strong><br>' +
      '<a href="https://www.openstreetmap.org/node/' + props.osm_id + '" target="_blank">View on OSM</a>' +
      (props.operator ? '<br>Operator: ' + props.operator : ''))
    .addTo(map);
});
```

**Effigy Mounds:**
```javascript
map.on('click', 'points-circles', function(e) {
  const props = e.features[0].properties;
  const lines = [];
  if (props.name)                lines.push('<strong>' + props.name + '</strong>');
  if (props.archaeological_site) lines.push('Type: ' + props.archaeological_site);
  if (props.wikipedia)           lines.push('<a href="https://en.wikipedia.org/wiki/' + props.wikipedia + '" target="_blank">Wikipedia</a>');
  new maplibregl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(lines.length ? lines.join('<br>') : 'Archaeological Site')
    .addTo(map);
});
```

## Add a Cursor Change

After the click handler:

```javascript
map.on('mouseenter', 'points-circles', () => map.getCanvas().style.cursor = 'pointer');
map.on('mouseleave', 'points-circles', () => map.getCanvas().style.cursor = '');
```

## Verify

Hard-refresh your browser tab (`Cmd+Shift+R` / `Ctrl+Shift+R`). Click one of the styled points and a popup should open. Hover over a point and the cursor should change to a pointer.

If nothing appears:
- Open the browser console (F12) and check for errors. Is the GeoJSON path right?
- Confirm the `"source"` field in `addLayer` matches the id in `addSource`
- Confirm the layer `"id"` in `addLayer` matches the id in your event handlers

## Commit Your Work

You edited `index.html`. Commit and push it to your fork the same way you committed your data in Step 2: the **Source Control panel**, or `git add index.html` → commit → push.

---

**[Previous: Step 2: Extract + Style Data](../step-02/)** | **[Next: Step 4: Swap in Custom Icons](../step-04/)**
