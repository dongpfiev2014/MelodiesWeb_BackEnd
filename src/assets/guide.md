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

docker run -d -p 3000:3000 --name my-react-app-container my-react-app

docker-compose down

docker-compose up --build

# Check all containers

docker ps

# List all containers stopped

docker ps -a
