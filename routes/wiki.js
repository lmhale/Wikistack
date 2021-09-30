const express = require("express");
const addPage = require("../views/addPage");
const wikiPage = require("../views/wikipage")
const main = require("../views/main")
const { Page } = require("../models");
const router = express.Router();

router.get("/", async function (req, res, next) {
    const t = await Page.findAll()
    res.send(main(t))
});

router.post("/", async function (req, res, next) {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
    });
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get("/add", function (req, res, next) {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const slugResult = await Page.findOne({ where: { slug: req.params.slug } });
    // res.json(slugResult);
    res.send(wikiPage(slugResult, "Me"))
  } catch (error) {
    next(error);
  }
});

module.exports = router;
