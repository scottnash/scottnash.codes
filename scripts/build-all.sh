#!/usr/bin/env bash
# Builds the main Next.js site plus the two sub-apps into ./out.
# Used by Render (render.yaml) and the GitHub Actions deploy.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# webpack 4 (Vue CLI 3) can hang after a successful build, so run it
# directly (single process), wait for "Build complete", then stop it.
echo "==> Building name-that-movie"
cd "$ROOT/apps/name-that-movie"
npm install --legacy-peer-deps --ignore-scripts
rm -rf dist
LOG="$(mktemp)"
NODE_OPTIONS=--openssl-legacy-provider \
  node node_modules/@vue/cli-service/bin/vue-cli-service.js build >"$LOG" 2>&1 &
PID=$!
for _ in $(seq 1 300); do
  grep -q "Build complete" "$LOG" && break
  kill -0 "$PID" 2>/dev/null || break
  sleep 1
done
kill "$PID" 2>/dev/null || true
wait "$PID" 2>/dev/null || true
cat "$LOG"
grep -q "Build complete" "$LOG" || { echo "name-that-movie build failed"; exit 1; }
test -f dist/index.html

echo "==> Building concentration"
cd "$ROOT/apps/concentration"
npm install --legacy-peer-deps
CI=false npm run build

echo "==> Building main site"
cd "$ROOT"
npm ci
npm run build

echo "==> Merging sub-app outputs"
rm -rf out/name-that-movie out/concentration
cp -r apps/name-that-movie/dist out/name-that-movie
cp -r apps/concentration/build out/concentration

echo "==> Done: $(find out -type f | wc -l | tr -d ' ') files in out/"
