#!/usr/bin/env bash
# Commit and push restaurant changes (GitHub Pages deploys automatically on push).
# Commit message numbers the new restaurants by overall count, e.g. "added restaurants 11,12".
# Usage: ./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to commit."
  exit 0
fi

# Pull first so rank numbers reflect everyone else's additions too.
git pull --rebase --autostash --quiet

# Overall count numbers of the new restaurants: with 10 before and 2 added, "11,12".
added=$(node - <<'EOF'
const { execSync } = require("child_process");
const fs = require("fs");
const load = (src) => new Function(src + "\n;return RESTAURANTS;")();
let old = [];
try { old = load(execSync("git show HEAD:restaurants.js", { encoding: "utf8" })); } catch {}
const oldNames = new Set(old.map((r) => r.name));
const current = load(fs.readFileSync("restaurants.js", "utf8"));
const newCount = current.filter((r) => !oldNames.has(r.name)).length;
const start = current.length - newCount;
console.log(Array.from({ length: newCount }, (_, i) => start + i + 1).join(","));
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

