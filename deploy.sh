#!/usr/bin/env bash
# Redeploy jamuin-web: tarik kode terbaru, build ulang image, restart container.
set -euo pipefail
cd "$(dirname "$0")"

echo "==> git pull"
git pull --ff-only

echo "==> docker compose build"
docker compose build

echo "==> docker compose up -d"
docker compose up -d

echo "==> bersihkan image lama yang menganggur (hemat disk)"
docker image prune -f

echo "==> selesai. status container:"
docker compose ps
