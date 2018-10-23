const express = require('express');
const middleware = require('../middlewares/jwtValidation');
const userController = require('../controllers/users');

const router = express.Router();

router.post('/login', userController.login);
router.post('/', userController.insert);

router.use(middleware.jwtValidation);
router.get('/:id', userController.get);
router.patch('/:id', userController.update);

module.exports = router;