const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res, next) {
  res.send("hello world");
});

app.listen("3000", function () {
  console.log("App listening on port 3000");
});
