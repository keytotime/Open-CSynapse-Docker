#!/bin/sh
#this meerly restarts the containers
docker-compose kill
docker-compose up -d web