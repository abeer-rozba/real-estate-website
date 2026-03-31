const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')

router.get('/new', (req, res) => {
  res.render('./reviews/new.ejs')
})
router.post('/:hotelId/new', reviewController.createReview)

module.exports = router
