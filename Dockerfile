FROM node:18-alpine

# Install system dependencies
RUN apk add --no-cache libc6-compat curl wget
RUN npm install -g pnpm

WORKDIR /app

# Copy workspace configuration
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./

# Create package directories and copy package.json files
RUN mkdir -p packages/frontend packages/contracts packages/rofl
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/contracts/package.json ./packages/contracts/
COPY packages/rofl/package.json ./packages/rofl/

# Install all dependencies using the workspace
RUN pnpm install --frozen-lockfile

# Copy all source files
COPY . .

# Build the frontend application
RUN cd packages/frontend && npm run build

# Set working directory for running the app
WORKDIR /app/packages/frontend

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000
CMD HOSTNAME="0.0.0.0" pnpm run start 