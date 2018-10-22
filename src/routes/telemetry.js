const express = require('express')
const router = express.Router()
const telemetryController = require('../pubg/controllers/telemetry')

router.get('/', telemetryController.get);

module.exports = router;