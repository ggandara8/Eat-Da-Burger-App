var mysql = require("mysql");

var connectionConfig = process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "7171",
  database: "burgers_db"
}

var connection = mysql.createConnection(connectionConfig);

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
});
  

module.exports = connection;