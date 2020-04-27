const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("../app/routes");
const path = require("path");

app.set("clientPath", path.join(__dirname, "../..", "client"));
app.use(express.static(app.get("clientPath")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, x-xsrf-token");
  res.header("Access-Control-Allow-Headers: X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use("/api/note", routes.note);
app.use("/api/user", routes.user);

module.exports = app;
