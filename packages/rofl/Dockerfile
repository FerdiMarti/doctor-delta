FROM docker.io/node:18-alpine

# Install system dependencies
RUN apk add --no-cache curl jq

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose port if needed
EXPOSE 3000

# Start the oracle
CMD ["npm", "start"]