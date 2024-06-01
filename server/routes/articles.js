var express = require("express");
var router = express.Router();

const articlesController = require("../controllers/articles");

router.get("/", articlesController.getAllArticles);

router.get("/:id", articlesController.getArticlesById);

router.delete("/:id", articlesController.deleteArticle);

router.put("/:id", articlesController.updateArticle);

router.post("/", articlesController.createArticle);

module.exports = router;
