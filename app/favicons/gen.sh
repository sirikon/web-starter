#!/usr/bin/env bash

set -e
cd $(dirname ${BASH_SOURCE[0]})

mkdir -p ../src/web/favicons/files
node gen.js
