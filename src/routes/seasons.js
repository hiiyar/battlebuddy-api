 const express = require('express')

 const router = express.Router();
 const seasons = require('../pubg/controllers/seasons');

 router.get('/', seasons.get);

 module.exports = router;