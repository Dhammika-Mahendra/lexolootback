# Use the official Node.js image from Docker Hub as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose the port that your app runs on (default 3000 for Node.js apps)
EXPOSE 3000

# Define the command to run your app
CMD ["node", "App.js"]
