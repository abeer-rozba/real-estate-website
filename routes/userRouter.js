const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.get('/bookmarks', userController.getAllBookmarks)
router.get('/:id', userController.showProfile)
router.get('/:id/edit', userController.editProfile)
router.put('/:id/edit', userController.updateProfile)

module.exports = router
