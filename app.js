const express = require("express");
const morgan = require("morgan");
const {db, Page, User} = require('./models');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res, next) {
  res.send("hello world");
});

async function initialize() {
  await Page.sync()
  
  await User.sync()

  app.listen("3000", function () {
    console.log("App listening on port 3000");
  });
  
}

initialize()