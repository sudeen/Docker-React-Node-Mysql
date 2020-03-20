const mysql = require("mysql");

// Create a pool instead of createConnection to increase the perfomance of application as it allows multiple queries to be run in parallel.
const mysqlConnection = mysql.createPool({
  host: "mysql-dev",
  user: "root",
  password: "root",
  database: "metigy_db",
  multipleStatements: true,
  connectionLimit: 100, // Mandatory while creating a pool
  debug: false,
  getConnection: 0,
  waitForConnections: true
});

mysqlConnection.getConnection((error, connection) => {
  if (!error) {
    console.log("Database connection successful!");
    // To create table in the database after successful connection. 
    connection.query('CREATE TABLE IF NOT EXISTS keywords ( id_keywords INT NOT NULL AUTO_INCREMENT, keywords VARCHAR(100) DEFAULT NULL, PRIMARY KEY (id_keywords))');
    connection.query('CREATE TABLE IF NOT EXISTS sites ( id_sites INT NOT NULL AUTO_INCREMENT, site_name VARCHAR(100) DEFAULT NULL, PRIMARY KEY (id_sites))');
    console.log('connected as id ', connection.threadId);
    connection.release();
  } else {
    console.log("Error connecting to database");
  }
});

module.exports = mysqlConnection;
