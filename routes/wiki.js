const express = require("express");
const addPage = require("../views/addPage");
const { Page } = require("../models");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("sup?");
});

router.post("/", async function (req, res, next) {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
    });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", function (req, res, next) {
  res.send(addPage());
});

module.exports = router;
