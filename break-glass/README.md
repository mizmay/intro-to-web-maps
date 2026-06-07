# Break Glass

This folder has two purposes:

1. **Reference implementations** — complete, working maps for both datasets. Open these in your browser at any point if you want to see what a finished map looks like or compare your code against a working version.
2. **Fallback resources** — if Overpass Ultra or Overpass Turbo is unavailable, use the pre-exported GeoJSON files and Overpass queries here to keep moving.

---

## Reference implementations

| File | What it shows |
|---|---|
| `index-lfl.html` | Complete Little Free Libraries map on the watercolor basemap |
| `index-mounds.html` | Complete Effigy Mounds map on the imagery basemap |

Open via Caddy: `http://localhost:1234/break-glass/index-lfl.html`

---

## Fallback resources

| File | What it is |
|---|---|
| `little_free_libraries.geojson` | Pre-exported GeoJSON — Madison `amenity=public_bookcase` (exported 2026-06-06) |
| `effigy_mounds.geojson` | Pre-exported GeoJSON — Madison area `historic=archaeological_site` (exported 2026-06-06) |
| `overpass_lfl.ovp` | Overpass QL query for Little Free Libraries |
| `overpass_mounds.ovp` | Overpass QL query for Effigy Mounds |

### If Overpass Ultra is down but Overpass Turbo works

1. Open [https://overpass-turbo.eu](https://overpass-turbo.eu)
2. Paste the contents of the relevant `.ovp` file
3. Click **Run**, then **Export → GeoJSON**
4. Rename and save to `sources/`

### If both are unavailable

1. Copy the pre-exported GeoJSON from this folder to `sources/`
2. Continue with Step 4 using that file as your data source

---

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
