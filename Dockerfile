# Use an official Node.js runtime as the base image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm i npm@latest -g

RUN npm install 


# Copy the entire project directory into the container
COPY . .

# Build the React app
RUN npm run build

# Use nginx for serving the static files
FROM nginx:alpine

# Copy the built React app from the 'build' stage to the nginx server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
