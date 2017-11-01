#!/bin/sh

url=https://drafts.csswg.org/css-flexbox/images
curl --remote-name-all \
  $url/flex-direction-terms.svg \
  $url/flex-pack.svg \
  $url/flex-align.svg \
  $url/align-content-example.svg \
