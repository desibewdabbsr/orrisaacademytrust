#!/bin/bash

# Build only the frontend for static site deployment
echo "Building frontend only for Netlify static deployment..."
cd client
npx vite build
cd ..

# Create dist/public directory if it doesn't exist
mkdir -p dist/public

# Move build files to the correct location
echo "Moving build files to dist/public..."
mv dist/* dist/public/ 2>/dev/null || true

# Copy public directory content
echo "Copying public directory content..."
cp -r public/* dist/public/

echo "Build completed successfully!"