npm install -g yarn

yarn init -y

yarn add express
yarn add nodemon
yarn add -D typescript @types/express @types/node ts-node

yarn tsc --init

"include": ["src/**/*"]

outDir = path
rootDir = path

# rebuild

docker build -t <image_name> .

# Stop container

docker stop <container_name_or_id>

# Delete container

docker rm <container_name_or_id>

# Run container

docker run -d -p 3000:3000 --name my-react-app-container my-react-app

# Check all containers

docker ps

# List all containers stopped

docker ps -a

# Check all images

docker images

# Delete images

docker rmi <image-id>

## Dockerfile for React-app - For Production: need build

```bash

# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock (hoặc package-lock.json nếu bạn dùng npm)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server for serving the built app
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx uses
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

```

## Dockerfile for Express - For Production: need build

```bash

# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build TypeScript files
RUN yarn build

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run the app
CMD ["yarn", "start:prod"]

```

## Docker-compose

```bash

services:
  frontend:
    build:
      context: ./path/to/your/react/app
    ports:
      - "5000:5000"
    depends_on:
      - backend

  backend:
    build:
      context: ./path/to/your/express/app
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
      - DB_PORT=5432
      - DB_USER=youruser
      - DB_PASSWORD=yourpassword
      - REDIS_HOST=redis
    depends_on:
      - db
      - redis

  db:
    image: postgres:14
    environment:
      POSTGRES_USER: youruser
      POSTGRES_PASSWORD: yourpassword
      POSTGRES_DB: yourdatabase
    ports:
      - "5432:5432"

  redis:
    image: redis:latest
    ports:
      - "6379:6379"

```

## Run all containers

docker-compose up --build

## Stop all containers

docker-compose down
docker-compose logs

## Delete docker-compose and volumes

docker-compose down -v

## Delete docker-compose images

docker-compose down --rmi all -v

## Docker compose run

docker-compose down

docker-compose up --build
docker-compose up

docker-compose start
docker-compose stop
docker-compose restart
