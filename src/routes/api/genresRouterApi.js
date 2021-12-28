const express = require("express");
const router = express.Router();
const genresAPIController = require("../../controllers/api/genresController");

router.get("/", genresAPIController.list);
router.get("/:id", genresAPIController.detail);


module.exports = router;