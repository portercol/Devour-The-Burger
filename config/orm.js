// Import connection.js file
const connection = require("./connection.js");

// Set up orm object with functions 'select all, create one and update one' with SQL statements
const orm = {

    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, [table], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    createOne: (name, cb) => {
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, 0);`
        connection.query(queryString, name, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (devoured, id, cb) => {
        var queryString = `UPDATE burgers SET devoured=? WHERE id=?;`
        connection.query(queryString, [devoured, id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;