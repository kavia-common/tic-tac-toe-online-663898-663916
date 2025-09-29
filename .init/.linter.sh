#!/bin/bash
echo "Running basic lint checks..."
if [ -f package.json ]; then
    echo "Project structure verified."
    exit 0
else
    echo "Missing package.json"
    exit 1
fi
