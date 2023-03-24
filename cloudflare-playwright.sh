#!/bin/sh
cd "$(dirname "$(readlink --canonicalize "$0")")"
docker run --env DISPLAY --rm --volume "$PWD":/app:ro --volume /tmp/.X11-unix:/tmp/.X11-unix mcr.microsoft.com/playwright:v$(node --eval='console.log(require("./node_modules/playwright-core/package.json").version)') node /app $1
