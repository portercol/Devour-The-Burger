// Require express module
var express = require("express");

// Import burger.js file
var burger = require("../models/burger.js");

// Create instance of express router
var router = express.Router();

// Create get route to get all burgers
router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// Create post route for create burger
router.post("/api/burgers", (req, res) => {
    console.log("Is this being hit?", req.body);
    burger.create(req.body.burger_name, (result) => {
        res.json({ id: result.insertID });
    });
});

// Create put route to get burgers id
router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        {
            bbq: req.body.bbq
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;
