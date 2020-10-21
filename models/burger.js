// Import the ORM to create functions that interact with DB
const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
            // console.log(selectAll);
        });
    },
    // The variables cols and vals are arrays.
    create: (name, cb) => {
        orm.createOne(name, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;