#!/bin/bash
mkdir -p build/static
cp -r src/* build/static/
cp public/index.html build/
echo "Build completed"
exit 0
