# docker-workshop
Workshop, introduction to Docker

### TODO
Make nessecary changes to allow our node backend to access the database

### Exercise
Uncomment the code in backend/index.js on the route GET /items. Replace the configuration as needed. Keep in mind that the host is the name of the container in your docker-compose file. Not localhost

Boot up the docker-compose and try the route GET /items and see if you can fetch data from the database.

### Optional exercises
Implement a POST route to INSERT items into the database
