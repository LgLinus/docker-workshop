# docker-workshop
Workshop, introduction to Docker

### TODO
In this part we are going to start getting familiar with `docker-compose`. This is a tool we can use to make it easier to maintain our containers, by specifying in a file how they should be run. 

#### docker-compose.yml
Create a directory data_volume in the root folder. We want to store that mysql data from the container on our host, so the data persist. This is completely optional. 

Add the database service below to your docker-compose file. 
```yaml
database:
    image: mysql:5.7
    container_name: database
    environment:
        MYSQL_ROOT_PASSWORD: password
        MYSQL_DATABASE: test
    ports:
        - "3308:3306"
    volumes:
        - ./data_volume:/var/lib/mysql
```

**Explanation**

`image`, this time we're not creating our own Dockerfile. We are happy with using just a prebuilt image for mysql v5.7. This image needs two envrionment variables set, which will specify the database and the password for the root user.

We expose ports 3308:3306, change the host port as you see fit. 

We store that data from the mysql container in our data_volume folder on our host.

Connect to Database. On localhost port 3308
```bash
 mysql test -h localhost -P 3308 -uroot -ppassword --protocol=tcp
```

**Test**
Run the docker-compose command and make sure your database container boots up correctly.

**Populate database**

Create a table called items and populate it with some data:

```sql
CREATE TABLE `items` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `product` text NOT NULL,
    `quantity` int(11) NOT NULL,
    `description` text NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO items(product,quantity,description) VALUES("Cheese", 1, "A tasty cheese");
INSERT INTO items(product,quantity,description) VALUES("Wine", 3, "3 bottles of wine");
INSERT INTO items(product,quantity,description) VALUES("Cupcake", 10, "Deliciouse cupcakes");

CREATE USER 'backend_user'@'%' IDENTIFIED BY 'backend_password';
GRANT SELECT, INSERT ON test.items TO 'backend_user'@'%';

```

### Next
In the next and final step we're going to connect the backend to the database. Your database and backend is up and running simultaneously you can proceed to the next step README_4_Consuming_database.md