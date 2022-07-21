#!/bin/sh
cd "$(dirname "$(readlink --canonicalize "$0")")"
docker run --rm --volume "$PWD":/app:ro mcr.microsoft.com/playwright:v$(node --eval='console.log(require("playwright-core/package.json").version)') node /app $1
