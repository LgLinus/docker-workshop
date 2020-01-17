# docker-workshop
Workshop, introduction to Docker

### TODO
In this part we're going to create a docker image and run it on our local machine. The container is going to take care of hosting our backend.

### Dockerfile
The Dockerfile contains instructions on how our image should be built.
```dockerfile
FROM node:12-alpine

WORKDIR /usr/src/app
RUN npm install

COPY . .

CMD ["npm", "start"]

```

#### Clarification
Docker images are layers of images built ontop of eachother. The FROM command specifies which image our Docker image should be based on. In this case we want it to be based on an official node image. We specify the version :12-alpine which will give us a base image containing node Version 12.

WORKDIR specifies the working directory of the image

'COPY package*.json ./' copies our package.json files from our host, into our container at the WORKDIR.

RUN is used when to executed a command. In this case we run npm install to install the dependencies for the application.

COPY . . copies over all of our files in the root directory to the container. It excludes all the files located in a .dockerignore file.

CMD is executed when the image is started. In this case we run npm start to run the application in development mode.

### Build, run

docker build ./backend

docker run -p 84:8000 node_be
docker run -v ~/git/github/docker-workshop/backend:/usr/src/app -p 84:8000 node_be

Runs the image node_be on HOST port 84, directed to port 8000 on the container. 

### Next

checkout branch workshop/2_database to proceed