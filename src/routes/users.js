const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('../middlewares/jwtValidation');

const router = express.Router();

const users = require('../pubg/controllers/users');
const jsonParser = bodyParser.json();

router.post('/login', users.login);
router.post('/', jsonParser, users.post);

router.use(middleware.jwtValidation);
router.get('/:id', users.get);
router.get('/:id/update', users.update);

module.exports = router;