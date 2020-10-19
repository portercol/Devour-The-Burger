// Require in express module
const express = require("express");

// Create PORT
const PORT = process.env.PORT || 8000;

// Create express server
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Set up server to listen on 'local host'
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});