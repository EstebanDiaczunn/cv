#!/usr/bin/env bash
# Regenera página + PDF y publica. Uso: ./publicar.sh "mensaje"
set -euo pipefail; cd "$(dirname "$0")"
node build.js
git add -A
git diff --cached --quiet && { echo "Nada nuevo."; exit 0; }
git commit -q -m "${1:-cv}"; git push -q
echo "✓ https://cv.diaczun.com (1-2 min)"
