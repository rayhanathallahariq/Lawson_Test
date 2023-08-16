const express = require('express')
const app = express()
const router = express.Router()
const merchant = require('./merchant')
const city = require('./city')
const user = require('./user')

router.use('/',merchant)
router.use('/',city)
router.use('/',user)

module.exports=router