# Use official Node.js runtime as base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
