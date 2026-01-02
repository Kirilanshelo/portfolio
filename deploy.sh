#!/usr/bin/env sh

# Abort on errors
set -e

# Build
npm run build

# Navigate into the build output directory
cd dist

# Add .nojekyll to bypass Jekyll on GitHub Pages
echo > .nojekyll

# If you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# If you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:kirilanshelo/portfolio.git main:gh-pages

cd -
