const express = require('express')
const router = express.Router()
const controller_city = require("../controllers/controller_city")

router.get('/allcity',controller_city.read)
router.post('/addcity',controller_city.add)
router.put('/updatecity/:id',controller_city.update)
router.delete('/deletecity/:id',controller_city.deleteCity)

module.exports = router