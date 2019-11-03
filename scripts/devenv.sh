#!/usr/bin/env bash

set -e
cd $(dirname ${BASH_SOURCE[0]})/../docker

docker-compose -p web-starter-devenv -f docker-compose.yml $@
