#!/bin/bash
docker run --rm -it -v $(pwd):/src -p 1313:1313 -u hugo jguyomard/hugo-builder hugo
