const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.get('/:id', userController.showProfile)
router.get('/:id/edit', (req, res) => {
  return res.render('./users/edit.ejs')
})
router.put('/:id/edit', userController.editProfile)
router.get('/:id/reviews', userController.showUserReviews)

module.exports = router
