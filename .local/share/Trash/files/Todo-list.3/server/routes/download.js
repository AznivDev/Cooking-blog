const express = require("express");
const router = express.Router();
const download = require("../controllers/download.js");

router.get("/download", download);

module.exports = router;
