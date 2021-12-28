const express = require("express");
const router = express.Router();
const moviesController = require("../../controllers/api/moviesController");

router.get("/", moviesController.list);
router.get("/detail/:id", moviesController.detail);


module.exports = router;