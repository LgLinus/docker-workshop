const express = require('express');
const app = express();

app.get('/', (req, response) => {
  response.send('Hello World!!');
});

/*
app.get("/items", (req, response) => {
  var mysql = require("mysql");

  var connection = mysql.createConnection({
    user: "USER",
    password: "PASSWORD_FOR_USER",
    host: "DATABASEHOST",
    port: 3306,
    database: "DATABASE"
  });

  connection.connect();

  connection.query("SELECT * FROM items", function(error, results, fields) {
    if (error) throw error;

    response.send(results);
  });
  connection.end();
});
*/
app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
