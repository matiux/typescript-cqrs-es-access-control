#!/usr/bin/env bash

#WORKDIR=$(docker-compose --file docker/docker-compose.yml run --rm -u utente php pwd)
WORKDIR=/usr/src/app
PROJECT_NAME=$(basename $(pwd) | tr  '[:upper:]' '[:lower:]')
COMPOSE_OVERRIDE=


if [[ -f "docker/docker-compose.override.yml" ]]; then
    COMPOSE_OVERRIDE="--file docker/docker-compose.override.yml"
fi

if [[ "$1" = "up" ]]; then

    shift 1

    docker-compose \
        --file docker/docker-compose.yml \
        ${COMPOSE_OVERRIDE} \
        -p ${PROJECT_NAME} \
        up $@

elif [[ "$1" = "build" ]]; then

    shift 1

    docker-compose \
        --file docker/docker-compose.yml \
        ${COMPOSE_OVERRIDE} \
        -p ${PROJECT_NAME} \
        build $@

elif [[ "$1" = "enter-root" ]]; then

    docker-compose \
        --file docker/docker-compose.yml \
        ${COMPOSE_OVERRIDE} \
        -p ${PROJECT_NAME} \
        exec \
        -u root \
        nodejs /bin/bash

elif [[ "$1" = "enter" ]]; then

    docker-compose \
        --file docker/docker-compose.yml \
        ${COMPOSE_OVERRIDE} \
        -p ${PROJECT_NAME} \
        exec \
        -u node \
        -w ${WORKDIR} \
        nodejs /bin/bash

elif [[ "$1" = "down" ]]; then

    shift 1
    docker-compose \
	    --file docker/docker-compose.yml \
	    ${COMPOSE_OVERRIDE} \
	    -p ${PROJECT_NAME} \
		down $@

elif [[ "$1" = "purge" ]]; then

    docker-compose \
	    --file docker/docker-compose.yml \
	    ${COMPOSE_OVERRIDE} \
	    -p ${PROJECT_NAME} \
		down \
        --rmi=all \
        --volumes \
        --remove-orphans

elif [[ "$1" = "log" ]]; then

    docker-compose \
        --file docker/docker-compose.yml \
        ${COMPOSE_OVERRIDE} \
        -p ${PROJECT_NAME} \
        logs -f

elif [[ $# -gt 0 ]]; then
    docker-compose \
        --file docker/docker-compose.yml \
        ${COMPOSE_OVERRIDE} \
        -p ${PROJECT_NAME} \
        "$@"

else
    docker-compose \
        --file docker/docker-compose.yml \
        ${COMPOSE_OVERRIDE} \
        -p ${PROJECT_NAME} \
        ps
fi