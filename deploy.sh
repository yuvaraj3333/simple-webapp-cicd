#!/bin/bash

echo "Updating source code..."

git pull origin main

echo "Stopping old container..."

docker stop webapp || true
docker rm webapp || true

echo "Building image..."

docker build -t simple-webapp:v1 .

echo "Starting container..."

docker run -d \
-p 3000:3000 \
--name webapp \
simple-webapp:v1

echo "Deployment complete"
