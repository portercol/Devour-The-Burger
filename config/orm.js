// Import connection.js file
const connection = require("./connection.js");

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

    createOne: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
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