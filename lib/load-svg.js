async function loadSVG(url) {
  const response = await fetch(url);
  const svg = await response.text();
  const img = new Image();
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  await img.decode();
  return img;
}
