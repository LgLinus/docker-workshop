# docker-workshop
Workshop, introduction to Docker

### TODO
In this part we're going to create a docker image and run it on our local machine. The container is going to take care of hosting our backend.

## Exercise 1
Creating the Dockerfile

+ Create a Dockerfile in the backend category which is based on a **node** image. For example node:10-alpine. 

+ Specify the working directory for the dockerfile(ex /usr/src/app)

+ Install your dependencies for the node application by copying over the package.json file and executing npm install. 

+ Copy over all of the source files for the application to the working directory. So the container will have access to the needed files.

+ Add an entry to the dockerfile that will execute npm start at startup. This will start the node server.

IF behind a proxy, you might have to add Environment variables to the image for your proxy settings.

### Testing
Build your image, the command below will build the Dockerfile located in the backend folder and give it a name, ex.  first_node_be
```bash
docker build ./backend -t first_node_be
```

If all works well, try and run the container with the command below. This will expose port 81 on your host and direct it into port 8000 on the container. Change the exposed port as needed if it's already used.

```bash
docker run -p 81:8000 first_node_be
```
Try reaching the backend with
```bash
curl localhost:81/
```

#### Clarification
`docker build ./backend`

`docker run -p 84:8000 node_be`

Runs the image `node_be` on HOST port 84, directed to port 8000 on the container. 

### Hot reload
We want the server to restart when making a change to the source code. In order to do this we can use nodemon on the container which will restart the server when changes are made on the files. We will also have to link the host source files with the container files in order to apply our changes to the container when changes are made in the host.

#### Install nodemon on container
Make the following changes to the Dockerfile.

Execute the command `npm install -g nodemon`. This will install nodemon globally on the container. And then change the CMD command to simply `CMD ["nodemon"]`

#### Link folders on host to container
The -v flag in docker run specifies the volume to connect. The host and container is divided by `:`. The first part is the host path and the second path is where on the container it will be stored. In this case we link it to the working directory of the image. This will make it so any changes done in our host folder will be applied in the container too.
```bash
docker run -v ~/git/github/docker-workshop/backend:/usr/src/app -p 84:8000 node_be
```

Test if it works by making changes to your index.js while the container is running. Any changes in the source code should result in the server being restarted.

### Next
We're going to look att simplifying the process by using docker-compose.

Goto README_2_Docker-Compose.md to proceed