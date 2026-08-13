#!/bin/bash
# deploy.sh — builds and pushes dist/ contents to GitHub Pages on main branch
set -e

echo "→ Building..."
./node_modules/.bin/vite build

echo "→ Copying CNAME and .nojekyll..."
cp public/CNAME dist/CNAME
touch dist/.nojekyll

echo "→ Copying dist/ contents to root for GitHub Pages..."
cp -r dist/assets ./assets 2>/dev/null || true
cp dist/index.html ./index.html.deploy 2>/dev/null || true

# Replace root index.html with the built version
cp dist/index.html ./index.html.built

echo "→ Swapping index.html for production build..."
# Save dev index
cp index.html index.html.dev
# Use built version
cp index.html.built index.html

echo "→ Committing and pushing..."
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin main --force

# Restore dev index for local work
cp index.html.dev index.html
rm -f index.html.dev index.html.built index.html.deploy

echo "✅ Done! Live in ~2 min at now.aprilfridae.com"
