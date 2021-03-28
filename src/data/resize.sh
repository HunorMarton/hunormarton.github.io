#!/bin/bash

## Resize images

# Remove img folder then make a copy from originals
rm -r ./src/data/img
cp -r ./src/data/img-original ./src/data/img
cd ./src/data/img || exit

# Copy each image with postfix @2x in the filename
for file in *.png; do
  cp "$file" "${file%.*}@2x.png"
done

# Resize non-retina images to 500x500 pixels
find . -name '*.png' -not -name '*@2x.png' -exec convert "{}" -resize 500x500 "{}" \;

# Resize retina images to 1000x1000 pixels
find . -name '*@2x.png' -exec convert "{}" -resize 1000x1000 "{}" \;


####################################################################

# Create a new index.js file
touch index.js
echo "// This file has been generated with npm run gen-images" > index.js

# Import all the images
find . -name '*.png' -not -name '*@2x.png' | sed -E 's/.\/(.*).png/\1/' | awk '{print "import "$1"Medium from \"./"$1".png\"; import "$1"Large from \"./"$1"@2x.png\";" }' | paste -s - >> index.js
echo "" >> index.js

# Export all the image references in a default export
echo "export default {" >> index.js

find . -name '*.png' -not -name '*@2x.png' | sed -E 's/.\/(.*).png/\1/' | awk '{print $1": { \"img@1x\": "$1"Medium, \"img@2x\": "$1"Large }" }' | paste -sd, - >> index.js

echo "};" >> index.js

