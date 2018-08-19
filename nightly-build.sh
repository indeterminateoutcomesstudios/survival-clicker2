#!/bin/bash

# Automatically fetches updates from the repo and builds them

# First argument is path to repository files
# Second argument is public folder of the web server

cd $1
git checkout -- .
git pull origin master
npm i

if ! npm run build; then
  return 1
fi

# If success copy files to public
rm -rf $2/*
cp -a $1/dist/. $2/