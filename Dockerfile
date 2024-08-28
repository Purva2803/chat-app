# Use an official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV PORT=3000
ENV MONGO_URI=mongodb://mongo:27017/chatapp

# Expose the port on which the app runs
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
