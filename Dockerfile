FROM node:23.11-slim AS base

RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates curl git && \
    rm -rf /var/lib/apt/lists/*
    
FROM base AS builder

WORKDIR /app

COPY package.json package-lock.json* tsconfig.json ./
COPY src ./src

RUN npm install

RUN npm run build

WORKDIR /app

RUN npm install --omit=dev

CMD ["node", "dist/index.js"]