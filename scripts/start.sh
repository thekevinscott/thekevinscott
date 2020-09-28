#!/bin/bash
# docker build -t hugo -f ./scripts/Dockerfile ./scripts
# docker build \
# -t hugo \
# --build-arg USER_ID=$(id -u ${USER}) \
# --build-arg GROUP_ID=$(id -g ${USER}) \
# -f ./scripts/Dockerfile \
# ./scripts || exit 1;

# docker run --rm -it \
#   -v $(pwd):/src \
#   -p 1313:1313 \
#   hugo hugo server -D bind=0.0.0.0 --baseURL=http://0.0.0.0:1313

docker run \
  --rm -it \
  -p 1313:1313 \
  -v $(pwd):/src \
  klakegg/hugo:0.74.3-ext-alpine \
  --cleanDestinationDir \
  --ignoreCache \
  --verbose \
  server --bind=0.0.0.0 --baseURL='http://tower2.hopto.org:1313'
