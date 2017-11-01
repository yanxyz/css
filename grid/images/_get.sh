#!/bin/sh

url=https://drafts.csswg.org/css-grid/images
curl --remote-name-all \
  $url/grid-lines.png \
  $url/grid-named-lines.png \
