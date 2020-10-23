// Import the ORM to create functions that interact with DB
const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.createOne(name, (res) => {
            cb(res);
        });
    },
    update: (devoured, id, cb) => {
        console.log("hit burger.js");
        orm.updateOne(devoured, id, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;