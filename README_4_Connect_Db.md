# docker-workshop
Workshop, introduction to Docker

### TODO
Make nessecary changes to allow our node backend to access the database

### Exercise 5

#### Install mysql dependency for node
A command can be executed in a container by running `docker exec -it <container> <command>`. In order to work with mysql in our backend we need to install the mysql module. A dependency in node can be installed by running `npm install <depdendency>`. Install the mysql module on your backend container. Since the volume is linked to our host the package.json in our source code will be updated along with it.

Uncomment the code in backend/index.js on the route GET /items. Replace the configuration as needed. Keep in mind that the host is the name of the container in your docker-compose file. Not localhost

Boot up the docker-compose and try the route GET /items and see if you can fetch data from the database.

### Optional exercises
Implement a POST route to INSERT items into the database

