#!/usr/bin/env bash

set -e
cd $(dirname ${BASH_SOURCE[0]})

mkdir -p ../resources/web/generated/favicons/files
node gen.js
