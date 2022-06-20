#!/bin/sh
docker run --rm --volume "$(dirname "$(readlink --canonicalize "$0")")":/app:ro mcr.microsoft.com/playwright:v1.22.2 node /app $1
