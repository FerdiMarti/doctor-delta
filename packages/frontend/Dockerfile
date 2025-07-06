FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app

COPY package.json package-lock.json* ./
RUN pnpm install --include=dev

FROM base AS runner
WORKDIR /app
RUN apk add --no-cache curl
RUN apk add --no-cache wget

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

EXPOSE 3000
CMD HOSTNAME="0.0.0.0" pnpm run start