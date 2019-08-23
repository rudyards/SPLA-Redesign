const express = require('express');
const router = express.Router();
const resourceCtrl = require('../../controllers/resources');


router.get('/', resourceCtrl.getAllResources)
router.get('/:area', resourceCtrl.getSomeResources)

module.exports = router;