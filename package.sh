#!/bin/bash
START_TIME=$SECONDS

echo "Buidling package..."
rm -r lib
tsc
rm -r package
mkdir package

echo "Copying files..."
cp -r lib package/lib
cp package.json Readme.md LICENSE package

echo "Adjusting package.json..."
sed -i 's/"private": true/"private": false/' ./package/package.json
npm pkg delete scripts.prepare --prefix ./package

ELAPSED_TIME=$(($SECONDS - $START_TIME))
echo "Done in $ELAPSED_TIME seconds!"
