---
layout: base.njk
title: "Step 5: Publish to GitHub Pages"
step: 5
---

Your map works locally. Now publish it.

## Make Sure Your Work Is Pushed

You committed and pushed at the end of Steps 2, 3, and 4, so your fork should already be up to date. Double-check the **Source Control panel** shows no pending changes (or run `git status`). If anything is uncommitted, commit and push it now before publishing.

## Enable GitHub Pages

1. Open a new browser tab and go to your fork on GitHub: `github.com/YOUR-USERNAME/intro-to-web-maps`
2. Click **Settings** → **Pages** (left sidebar, under "Code and automation")
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** → **/ (root)**
4. Click **Save**

GitHub starts a Pages build. It takes 1–2 minutes.

## Get Your Live URL

After the build completes, the Pages settings page shows a banner with your URL:

```
https://YOUR-USERNAME.github.io/intro-to-web-maps/
```

Open it. Your map should load (basemap, icons, popup), all working from GitHub's servers with no Caddy running.

## Troubleshooting

**Map is blank on Pages but works locally:**
- Open the browser console at your Pages URL and look for 404s
- The PMTiles files in `sources/` are committed to the repo, so they should be present; check that the filename in `addSource` matches exactly
- `.nojekyll` is already committed, so Pages will not try to run Jekyll

**Build failed or page not found:**
- Check the **Actions** tab on your fork for the Pages deployment status and any error message

---

**[Previous: Step 4: Swap in Custom Icons](../step-04/)**
