# ---
# Build step
# ---
FROM node:alpine AS build

# Set working directory
WORKDIR /build

# Copy package.json and lock to install packages
COPY package*.json ./

# Install packages
RUN npm install

# Copy all files
COPY . .

# Build
RUN npm run build

# ---
# Serving step
# ---
FROM caddy:latest

# Set working directory
WORKDIR /docs

# Copy build
COPY --from=build /build/docs/.vitepress/dist .
# Copy statics
COPY --from=build /build/docs/static ./static

# Run
CMD ["caddy", "file-server", "--listen", ":80", "--root", "/docs"]
