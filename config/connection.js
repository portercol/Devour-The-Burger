// Import mysql module
const mysql = require("mysql");

// Import dotenv module
require("dotenv").config();

// Create connection to MySQL database 'burgers_db'
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
});

// Run connection to 'burgers_db'
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
})

module.exports = connection;