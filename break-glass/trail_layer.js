// Break-glass: MapLibre GL JS layer definition for the Capital City State Trail
//
// This is the addSource / addLayer code you would normally generate during Step 2
// using Overpass Ultra's style editor.
//
// If Overpass Ultra is unavailable:
//   1. Copy capital_city_trail.geojson (from this folder) into sources/
//   2. Paste the map.addSource and map.addLayer calls below into the
//      map.on('load', function () { ... }) block in index.html,
//      replacing or confirming the existing trail code.

map.addSource('capital-city-trail', {
  type: 'geojson',
  data: 'sources/capital_city_trail.geojson'
});

map.addLayer({
  id: 'trail-line',
  type: 'line',
  source: 'capital-city-trail',
  paint: {
    'line-color': TRAIL_COLOR,
    'line-width': TRAIL_WIDTH,
    'line-dasharray': TRAIL_DASH
  }
}, firstSymbolLayer);
