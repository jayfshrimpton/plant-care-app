FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the service
COPY . .

# Expose the service port
EXPOSE 4001

# Start the service
CMD ["npm", "start"]