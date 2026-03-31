const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.get("/:id", userController.showProfile)
router.put("/:id/edit", userController.editProfile)
// router.put("/:id/edit", userController.updateProfile)
// router.get("/bookmarks", userController.getAllBookmarks)

module.exports = router
