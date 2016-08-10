#!/bin/bash

args="$@"

args="$@ -p 3000"

file=/data/db.json
if [ -f $file ]; then
    echo "Found db.json, trying to open"
    args="$args -w db.json"
fi

file=/data/routes.json
if [ -f $file ]; then
    echo "Found routes.json, trying to open"
    args="$args -r routes.json"
fi

json-server $args
# running in background
# json-server $args >> ./json-server.log 2>&1 </dev/null &
# /bin/bash
