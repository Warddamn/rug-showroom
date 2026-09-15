#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves
# at https://warddamn.github.io/rug-showroom/. Run with: npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."

REPO_URL="https://github.com/Warddamn/rug-showroom.git"
SHA="$(git rev-parse --short HEAD)"
AUTHOR_NAME="Warddamn"
AUTHOR_EMAIL="Warddamn@users.noreply.github.com"   # GitHub's no-reply form; keeps the personal address out of a public repo

npm run build
rm -rf .deploy && mkdir .deploy
cp -R dist/. .deploy/
touch .deploy/.nojekyll            # serve files as-is; no Jekyll processing
cd .deploy
git init -q -b gh-pages
git add -A
git -c user.name="${AUTHOR_NAME}" -c user.email="${AUTHOR_EMAIL}" commit -q -m "Deploy ${SHA}"
git -c credential.helper='!gh auth git-credential' push -f "${REPO_URL}" gh-pages:gh-pages
cd .. && rm -rf .deploy
echo "Deployed ${SHA} to gh-pages. Give GitHub about a minute, then open https://warddamn.github.io/rug-showroom/"
