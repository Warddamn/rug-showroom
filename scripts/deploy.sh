#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves
# at https://warddamn.github.io/rug-showroom/. Run with: npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."

REPO_URL="https://github.com/Warddamn/rug-showroom.git"
SHA="$(git rev-parse --short HEAD)"

npm run build
rm -rf .deploy && mkdir .deploy
cp -R dist/. .deploy/
touch .deploy/.nojekyll            # serve files as-is; no Jekyll processing
cd .deploy
git init -q -b gh-pages
git add -A
git -c user.name="Warddamn" -c user.email="ward.payton@gmail.com" commit -q -m "Deploy ${SHA}"
git -c credential.helper='!gh auth git-credential' push -f "${REPO_URL}" gh-pages:gh-pages
cd .. && rm -rf .deploy
echo "Deployed ${SHA} to gh-pages. Give GitHub about a minute, then open https://warddamn.github.io/rug-showroom/"
