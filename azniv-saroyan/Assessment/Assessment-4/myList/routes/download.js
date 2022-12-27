const express = require('express')
const download = require('../controllers/download.js')
const router = express.Router();

router.get('/download', download)

module.exports = router