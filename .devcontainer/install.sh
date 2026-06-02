#!/usr/bin/env bash
# Devcontainer setup for OSM Trail Map Workshop
# Installs Caddy and the PMTiles CLI.
# Runs once during container creation (postCreateCommand in devcontainer.json).
set -euo pipefail

echo "==> Installing Caddy..."
sudo apt-get update -qq
sudo apt-get install -y --no-install-recommends \
  debian-keyring debian-archive-keyring apt-transport-https curl

curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
  | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg

curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
  | sudo tee /etc/apt/sources.list.d/caddy-stable.list

sudo apt-get update -qq
sudo apt-get install -y caddy

# Disable the systemd service — participants start Caddy manually with `caddy run`
sudo systemctl disable caddy 2>/dev/null || true
sudo systemctl stop caddy 2>/dev/null || true

echo "    Caddy $(caddy version)"

echo "==> Installing PMTiles CLI..."
# Pinned to v1.30.2 (released 2026-04-22) to avoid GitHub API rate-limit issues
# when multiple Codespaces launch simultaneously during a workshop.
# To upgrade: update PMTILES_VERSION below.
# Latest releases: https://github.com/protomaps/go-pmtiles/releases
PMTILES_VERSION="1.30.2"
PMTILES_URL="https://github.com/protomaps/go-pmtiles/releases/download/v${PMTILES_VERSION}/go-pmtiles_${PMTILES_VERSION}_Linux_x86_64.tar.gz"

curl -sL "$PMTILES_URL" | sudo tar xz -C /usr/local/bin pmtiles
echo "    PMTiles CLI $(pmtiles version)"

echo ""
echo "Setup complete. To start the map server:"
echo "  cd /workspaces/intro-to-web-maps && caddy run"
