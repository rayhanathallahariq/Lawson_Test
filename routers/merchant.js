const express = require('express')
const router = express.Router()
const controllerMerchant = require('../controllers/controller_merchant')

router.get('/allmerchant',controllerMerchant.read)
router.post('/addmerchant',controllerMerchant.add)

module.exports = router