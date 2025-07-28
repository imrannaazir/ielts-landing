# 1. Use official Node.js image
FROM node:18-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# 4. Copy the rest of the code
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Production image (only necessary files)
FROM node:18-alpine AS runner

WORKDIR /app

# Optional: install tini to handle signals properly
RUN apk add --no-cache tini


# Copy only necessary files from previous build
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/next.config.ts ./next.config.ts
COPY --from=deps /app/.env ./.env

# Expose port
EXPOSE 3000

# Start the Next.js server
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "start"]
