#!/bin/bash

# Build only the frontend for static site deployment
echo "Building frontend only for Netlify static deployment..."
cd client
npx vite build
cd ..

# Copy public directory content
echo "Copying public directory content..."
cp -r public/* dist/

echo "Build completed successfully!"