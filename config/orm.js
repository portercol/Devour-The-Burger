// Import connection.js file
const connection = require("./connection.js");

// function printQuestionMarks()

// Set up orm object with functions 'select all, insert one and update one' SQL statements
const orm = {

    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, [table], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
            console.log(result);
        });
    },

    createOne: (name, cb) => {
        console.log(name, "ORM IS HIT");
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, 0);` 
        console.log(queryString);

        connection.query(queryString, name, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
};

module.exports = orm;