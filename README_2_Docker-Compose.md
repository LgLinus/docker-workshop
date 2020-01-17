# docker-workshop
Workshop, introduction to Docker

### TODO
In this part we are going to start getting familiar with `docker-compose`. This is a tool we can use to make it easier to maintain our containers, by specifying in a file how they should be run. 

#### docker-compose.yml
Below is an example 
```yaml
version: '3'
services:
   backend:
        container_name: <name_of_image>
        build:
            context: <relative_path_to_service>
            dockerfile: ./Dockerfile
        ports:
        -<host_port>:<container_port>
        volumes:
            - <relative_path_to_source>:<container_workdir>
```
Where context is the path to the folder your Dockerfile is located. Note that we can specify a relative path for the volume.

### Exercise
Create the docker-compose.yml file with above specification and replace the variables with the ones specific for this backend. Place the file in the root directory.

Test out the application by running `docker-compose up --build`. Which will build the image and run the container with the space setup in the docker-comopse.yml file

### Next

If your container is up and running with hot reloading using docker-compose, goto README_3_Database.md