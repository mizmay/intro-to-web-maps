---
layout: base.njk
title: Before You Arrive
step: prereqs
---

Please complete this setup **before the workshop session begins**. The session has 75 minutes of hands-on content — we won't have time for installs in the room.

If you run into trouble during setup, bring your laptop to the session early and we'll sort it out before 3:45 pm.

## Choose Your Path

You have two options. Both work equally well. Pick the one that fits your comfort level.

**Path A — Local setup:** Everything runs on your own machine. Requires installing a few tools (Git, Caddy, VS Code). The map files live on your laptop.

**Path B — GitHub Codespaces:** Everything runs in a cloud-hosted development environment in your browser. No installs needed beyond a GitHub account. Caddy and the PMTiles CLI are pre-installed.

---

## Both Paths: Fork the Workshop Repository

Regardless of which path you choose, you need to **fork the workshop repository to your own GitHub account**. This gives you a personal copy to edit and publish.

1. Create a [GitHub account](https://github.com/join) if you don't already have one
2. Go to [github.com/mizmay/osm-trail-map](https://github.com/mizmay/osm-trail-map)
3. Click **Fork** (top right) → **Create fork**
4. Your copy will live at `github.com/YOUR-USERNAME/osm-trail-map`

At the end of the workshop, you'll enable GitHub Pages on your fork and share a live URL: `YOUR-USERNAME.github.io/osm-trail-map/`

---

## Path A — Local Setup

You need three tools installed on your machine.

### 1. Git

Git is used to clone your fork and push changes to GitHub.

**macOS:**
```bash
git --version
```
If Git isn't installed, macOS will prompt you to install Xcode Command Line Tools. Accept it.

**Windows:** Download and install [Git for Windows](https://git-scm.com/download/win). Accept all defaults.

**Linux (Debian/Ubuntu):**
```bash
sudo apt install git
```

**Verify:**
```bash
git --version
# git version 2.x.x
```

### 2. VS Code (or another code editor)

You'll be editing `index.html` and `style.json` during the workshop. Any text editor works, but VS Code is recommended.

Download: [code.visualstudio.com](https://code.visualstudio.com/)

### 3. Caddy Web Server

Caddy serves your map files locally. We use Caddy instead of a simpler Python or Node server because the workshop uses **PMTiles** for terrain tiles — PMTiles files require HTTP byte-range request support and correct CORS headers to load in the browser, both of which Caddy handles out of the box with a one-line config.

**macOS (Homebrew):**
```bash
brew install caddy
```

**macOS (without Homebrew):** Download from [caddyserver.com/docs/install](https://caddyserver.com/docs/install)

**Windows:** Download the `.exe` from [caddyserver.com/docs/install](https://caddyserver.com/docs/install) and add it to your PATH. The install page has step-by-step instructions.

**Linux (Debian/Ubuntu):**
```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

**Verify:**
```bash
caddy version
# v2.x.x
```

### 4. Clone Your Fork

Once you have Git and VS Code installed:

```bash
git clone https://github.com/YOUR-USERNAME/osm-trail-map
cd osm-trail-map
```

Open the folder in VS Code:
```bash
code .
```

### Path A Verification Checklist

Run these commands in your terminal before the session:

```bash
git --version     # should print git version 2.x.x or higher
caddy version     # should print v2.x.x
```

Open `http://127.0.0.1:1234/` in your browser after starting Caddy from the repo folder:
```bash
caddy run
```
You should see the Capital City State Trail map load. If it loads, you're ready.

---

## Path B — GitHub Codespaces

GitHub Codespaces gives you a full development environment in your browser — no installs required. Caddy and the PMTiles CLI are pre-configured in the repository's devcontainer.

1. Fork the repository (see above — you still need a GitHub account and fork)
2. On your fork, click **Code** → **Codespaces** tab → **Create codespace on main**
3. Wait for the environment to build (~1–2 minutes on first launch)
4. A VS Code-like editor opens in your browser with the repo pre-loaded
5. In the terminal at the bottom, run:
```bash
caddy run
```
6. Codespaces will detect the port and offer to open it in a new browser tab. Click **Open in Browser** — you should see the map.

**Path B Verification Checklist:**
- Codespace launches without errors
- `caddy run` starts without errors
- The map loads in the forwarded port preview

---

## Optional: PMTiles CLI

The PMTiles CLI is used in **Step 5** to download a terrain tile extract for the Madison area. It's already installed in Codespaces. For local setup it's optional — you can follow along conceptually when the command is demonstrated, or install it to run it yourself.

**macOS (Homebrew):**
```bash
brew install pmtiles
```

**All platforms:** Download a binary from [github.com/protomaps/go-pmtiles/releases](https://github.com/protomaps/go-pmtiles/releases)

**Verify:**
```bash
pmtiles version
```

---

## Questions?

If you have trouble with setup, open an issue on [github.com/mizmay/osm-trail-map](https://github.com/mizmay/osm-trail-map) or bring your laptop to the session early.

---

**[Next: Step 1 — Verify Setup](../step-01/)**
