# Break Glass

Use this folder if **Overpass Ultra and Overpass Turbo are both unavailable**, or if you're stuck on Step 2 and need to move on.

It contains everything you would normally produce during the Overpass step, so you can skip straight to Step 3 without being blocked.

---

## Contents

| File | What it is | When to use it |
|---|---|---|
| `capital_city_trail.geojson` | Pre-downloaded trail geometry from OSM relation [2997493](https://www.openstreetmap.org/relation/2997493) | Copy to `sources/` if you can't export from Overpass |
| `overpass_query.ovp` | The Overpass QL query for the trail | Paste into [Overpass Turbo](https://overpass-turbo.eu) if Overpass Ultra isn't working |
| `trail_layer.js` | The MapLibre GL JS `addSource` / `addLayer` code | Paste into `index.html` if you couldn't generate the layer style in Overpass Ultra |

---

## If Overpass is completely unavailable

1. Copy `capital_city_trail.geojson` → `sources/capital_city_trail.geojson`
2. Open `index.html`. The `map.on('load')` block already contains the correct source and layer code — no changes needed.
3. Continue from Step 3.

## If Overpass Ultra is down but Turbo works

1. Open [https://overpass-turbo.eu](https://overpass-turbo.eu)
2. Paste the contents of `overpass_query.ovp` into the editor
3. Click **Run**, then **Export → GeoJSON**
4. Rename the file to `capital_city_trail.geojson` and place it in `sources/`
5. Continue from Step 3

---

The trail data here was extracted on **2026-05-24** from OpenStreetMap relation 2997493.
Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
