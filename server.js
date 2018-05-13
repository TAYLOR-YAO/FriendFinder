var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./app/data/friends");
var apiRoutes = require("./routing/apiRoutes");
var htmlRoutes = require("./routing/htmlRoutes")
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app/public')));

app.use('/', htmlRoutes)
app.use("/api", apiRoutes)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });