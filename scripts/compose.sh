#!/usr/bin/env bash

set -e
cd $(dirname ${BASH_SOURCE[0]})/../docker

PROJECT_NAME=$(../scripts/internal/project-name.js)

PROJECT_NAME=${PROJECT_NAME} docker-compose -p ${PROJECT_NAME}-devenv -f docker-compose.yml $@
