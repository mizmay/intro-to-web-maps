---
layout: base.njk
title: "Step 2: Extract + Style Data"
step: 2
---

You'll query live OSM data and style it visually in Overpass Ultra. The style values you choose here are what you'll carry into `index.html` in the next step.

## Choose Your Dataset

Pick one of two datasets, both mapped in and around Madison, Wisconsin.

**Option A: Little Free Libraries.** Pairs with the watercolor basemap. Little Free Library is a book-sharing movement: small neighborhood boxes where anyone can take a book or leave one. The first was built in 2009 by Todd Bol in Hudson, Wisconsin, and grew into a worldwide network of tens of thousands, co-developed with UW-Madison's Rick Brooks. In OSM they're tagged `amenity=public_bookcase`, with 40+ mapped across Madison. Because community members add them rather than an authority, they're a good example of grassroots, crowd-sourced mapping.

**Option B: Effigy Mounds.** Pairs with the imagery basemap. Effigy mounds are earthworks raised by Native peoples in the shapes of animals, birds, and other forms during the Late Woodland period (roughly AD 350–1300). The Madison area has one of the densest concentrations anywhere: the land the Ho-Chunk call Teejop (Dejope), "four lakes," once held an estimated 1,500 mounds, and the Lake Wingra area may have the highest concentration of Native American mounds in the world. Around 80% have been lost to farming and development; surviving groups sit at Governor Nelson State Park, on Picnic Point, and at the Mendota Mental Health Institute. They're tagged `historic=archaeological_site`. The mounds stand only one to four feet tall, so they don't appear in the terrain hillshade; what the terrain shows is the land they were built on, the bluffs above Lake Mendota and the glacial drumlin field.

The basemap pairing is a recommendation, not a constraint.

## Open Overpass Ultra

Go to [Overpass Ultra](https://overpass-ultra.us/#m=7.47/43.014/-89.192).

Overpass Ultra is a MapLibre-powered tool for querying OSM data. Unlike Overpass Turbo, it uses the [MapLibre GL JS Style Spec](https://maplibre.org/maplibre-style-spec/): the same properties and values as the style JSON you swapped in `index.html`.

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

<div class="break-glass">

If all else fails and Overpass Ultra is unavailable, pre-exported GeoJSONs and Overpass Turbo fallback queries are in the `break-glass/` folder.

</div>

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

Leave this browser tab open. In the next step you'll style the circle layer in `index.html` using the properties and values defined by the MapLibre style specification.

---

**[Previous: Step 1: Verify Setup + Preview Basemaps](../step-01/)** | **[Next: Step 3: Add Data Layer + Popup](../step-03/)**
