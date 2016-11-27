#!/bin/sh
#this script restarts the containers and resets the mongo database.
docker-compose kill
docker-compose rm -f mongo
docker-compose up -d mongo
docker-compose run mongo-seed
docker-compose up -d web