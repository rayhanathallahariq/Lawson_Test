const express = require('express')
const router = express.Router()
const controller_user = require('../controllers/controller_user')

router.get('/allusers',controller_user.read)
router.post('/addusers',controller_user.add)
router.put('/updateusers/:id',controller_user.update)
router.delete('/deleteusers/:id',controller_user.deleteUser)

module.exports = router