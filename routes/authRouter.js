const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.get('/sign-up', (req, res) => {
  res.render('./auth/sign-up.ejs')
})
router.post('/sign-up', authController.registerUser)

router.get('/sign-in', (req, res) => {
  res.render('./auth/sign-in.ejs')
})
router.post('/sign-in', authController.signUserIn)

module.exports = router
