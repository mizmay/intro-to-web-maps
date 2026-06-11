---
layout: base.njk
title: "Step 2: Extract + Style Data"
step: 2
---

You'll query live OSM data and style it visually in Overpass Ultra. The style values you choose here are what you'll carry into `index.html` in the next step.

## Choose Your Dataset

**Option A: Little Free Libraries.** Community book exchanges tagged `amenity=public_bookcase` in OSM. 40+ locations across Madison. Pairs with the watercolor basemap.

**Option B: Effigy Mounds.** Native American earthwork mounds tagged `historic=archaeological_site`. Sparse but significant; each point carries cultural weight. Pairs with the imagery basemap.

The basemap pairing is a recommendation, not a constraint.

## Open Overpass Ultra

Go to [Overpass Ultra](https://overpass-ultra.us/#m=7.47/43.014/-89.192).

Overpass Ultra is a MapLibre-powered tool for querying OSM data. Unlike Overpass Turbo, it uses the MapLibre GL JS style spec: the same properties and values as the style JSON you swapped in `index.html`.

## Run the Query

Zoom or pan the map to Madison, or search for "Madison, Wisconsin." Then paste the query for your dataset and click **Run**:

{% raw %}
**Option A (Little Free Libraries):**
```
[out:json][timeout:60];
node["amenity"="public_bookcase"]({{bbox}});
out geom;
```

**Option B (Effigy Mounds):**
```
[out:json][timeout:60];
(
  node["historic"="archaeological_site"]({{bbox}});
  node["historic"="earthworks"]({{bbox}});
);
out geom;
```

`{{bbox}}` is filled in from the current map view. If your request times out, try zooming in further.
{% endraw %}

Points should appear on the map. Click one to inspect its OSM properties in the sidebar.

**Break-glass:** If all else fails and Overpass Ultra is unavailable, pre-exported GeoJSONs and Overpass Turbo fallback queries are in the `break-glass/` folder.

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

## Export the Data

Click **Export** → **GeoJSON**. Your browser downloads the file (usually to your **Downloads** folder). Rename it to match your dataset:
- `little_free_libraries.geojson` (Option A)
- `effigy_mounds.geojson` (Option B)

## Save It Into Your Repo

The file needs to live in the `sources/` folder of your project.

**Local setup:** Move the downloaded file from **Downloads** into the `sources/` folder of your cloned repo.

**Codespaces:** Your repo lives in the cloud, not on your laptop, so you need to upload the file into it:
1. In the file explorer on the left, find and expand the `sources/` folder
2. Drag the downloaded `.geojson` file from your computer onto the `sources/` folder (or right-click `sources/` → **Upload...** and pick the file)
3. Confirm the file now appears under `sources/` in the explorer

## Commit Your Data to Your Fork

Save this data to your fork so it's versioned and ready to publish later.

**Use the Source Control panel** (the branch icon in the left sidebar of VS Code / Codespaces): stage the new file under `sources/`, type a commit message, click the checkmark to commit, then **Sync Changes** to push.

**Or Use Terminal (local or Codespaces):**
```bash
git add sources/
git commit -m "Add exported OSM data"
git push
```

## Keep Overpass Ultra Open

Leave this browser tab open. In the next step you'll recreate this circle layer in `index.html` using the style values you just chose, so keep them handy: your `circle-color`, `circle-radius`, and `circle-opacity`.

---

**[Previous: Step 1: Verify Setup + Preview Basemaps](../step-01/)** | **[Next: Step 3: Add Data Layer + Popup](../step-03/)**
