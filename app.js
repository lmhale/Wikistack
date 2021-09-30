const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (req, res, next) {
  res.redirect("/wiki");
});

app.use("/wiki", wikiRouter);
// app.use("/user", userRouter);

async function initialize() {
  await Page.sync();

  await User.sync();

  app.listen("3000", function () {
    console.log("App listening on port 3000");
  });
}

initialize();
