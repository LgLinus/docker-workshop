const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worldsaa!!");
});

app.get("/items", (req, res) => {
  var mysql = require("mysql");

  var connection = mysql.createConnection({
    user: "backend_user",
    password: "backend_password",
    host: "database",
    port: 3306,
    database: "test"
  });

  connection.connect();

  connection.query("SELECT * FROM items", function(error, results, fields) {
    if (error) throw error;

    res.send(results);
  });
  connection.end();
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
