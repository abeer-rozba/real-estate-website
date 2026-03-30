const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.get('/sign-up', (req, res) => {
  res.render('./auth/sign-up.ejs')
})

router.post('/sign-up', authController.registerUser)

module.exports = router
