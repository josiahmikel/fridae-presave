#!/bin/bash
# deploy.sh — builds and pushes dist/ contents to GitHub Pages on main branch
set -e

echo "→ Building..."
./node_modules/.bin/vite build

echo "→ Copying CNAME and .nojekyll..."
cp public/CNAME dist/CNAME
touch dist/.nojekyll

echo "→ Copying built assets to the GitHub Pages root..."
cp -R dist/assets/. ./assets/
cp dist/index.dev.html ./index.html

echo "→ Committing and pushing..."
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin main --force

echo "✅ Done! Live in ~2 min at now.aprilfridae.com"
