#!/bin/bash
# docker build -t hugo -f ./scripts/Dockerfile ./scripts
docker build \
-t hugo \
--build-arg USER_ID=$(id -u ${USER}) \
--build-arg GROUP_ID=$(id -g ${USER}) \
-f ./scripts/Dockerfile \
./scripts || exit 1;

docker run --rm -it \
  -v $(pwd):/src \
  -p 1313:1313 \
  hugo hugo server -D
