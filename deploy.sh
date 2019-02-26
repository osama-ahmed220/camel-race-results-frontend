#!/bin/bash

yarn build
docker build -t osama/camel-race-results:latest . --no-cache
heroku container:push --app=camel-race-results web
heroku container:release --app=camel-race-results web