# Use official Node.js runtime as a parent image
FROM node:alpine3.22

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the application
CMD ["node", "index.js"]
