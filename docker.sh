#!/bin/sh
docker run --rm --volume "$PWD":/app mcr.microsoft.com/playwright:v1.22.2 node /app $1
