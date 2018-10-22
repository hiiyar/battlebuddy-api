const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const users = require('../pubg/controllers/users');
const jsonParser = bodyParser.json();

router.get('/:id', users.get);
router.get('/:id/update', users.update);
router.post('/', jsonParser, users.post);

module.exports = router;