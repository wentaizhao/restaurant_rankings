#!/usr/bin/env bash
# Commit, push, and deploy restaurant changes.
# Commit message lists the rank numbers of newly added restaurants, e.g. "added restaurants 5,6".
# Usage: ./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to commit."
  exit 0
fi

# Pull first so rank numbers reflect everyone else's additions too.
git pull --rebase --autostash --quiet

# Rank numbers (1-based) of restaurants in the working copy that aren't in HEAD.
added=$(node - <<'EOF'
const { execSync } = require("child_process");
const fs = require("fs");
const load = (src) => new Function(src + "\n;return RESTAURANTS;")();
let old = [];
try { old = load(execSync("git show HEAD:restaurants.js", { encoding: "utf8" })); } catch {}
const oldNames = new Set(old.map((r) => r.name));
const current = load(fs.readFileSync("restaurants.js", "utf8"));
console.log(current.map((r, i) => (oldNames.has(r.name) ? null : i + 1)).filter(Boolean).join(","));
EOF
)

if [ -n "$added" ]; then
  msg="added restaurants $added"
else
  msg="updated restaurants"
fi

git add -A
git commit --quiet -m "$msg"
git push --quiet
echo "Pushed: $msg"

# GitHub Pages deploys from main on push; wait for the build to finish.
if command -v gh >/dev/null 2>&1; then
  sha=$(git rev-parse HEAD)
  echo -n "Deploying"
  for _ in $(seq 1 60); do
    read -r status commit < <(gh api "repos/{owner}/{repo}/pages/builds/latest" --jq '"\(.status) \(.commit)"' 2>/dev/null || echo "unknown none")
    if [ "$commit" = "$sha" ] && [ "$status" = "built" ]; then
      echo " done: $(gh api "repos/{owner}/{repo}/pages" --jq .html_url)"
      exit 0
    elif [ "$commit" = "$sha" ] && [ "$status" = "errored" ]; then
      echo " failed. Check the repo's Actions tab."
      exit 1
    fi
    echo -n "."
    sleep 5
  done
  echo " still building after 5 min; check GitHub for status."
fi
