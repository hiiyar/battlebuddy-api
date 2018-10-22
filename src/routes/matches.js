const express = require('express')
const router = express.Router();

const matches = require('../pubg/controllers/matches');

router.get('/', matches.get);

module.exports = router;