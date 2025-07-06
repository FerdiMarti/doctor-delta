FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./

# Copy frontend package files
COPY packages/frontend/package.json ./packages/frontend/
# Install all dependencies (workspace aware)
RUN pnpm install --frozen-lockfile

FROM base AS runner
WORKDIR /app
RUN apk add --no-cache curl
RUN apk add --no-cache wget
RUN npm install -g pnpm

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Copy the entire node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy frontend source files
COPY packages/frontend ./packages/frontend

# Set working directory to frontend package
WORKDIR /app/packages/frontend

# Build the application
RUN pnpm run build

EXPOSE 3000
CMD HOSTNAME="0.0.0.0" pnpm run start