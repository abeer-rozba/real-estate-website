const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')

router.get('/new', (req, res) => {
  res.render('./reviews/new.ejs')
})
router.post('/:hotelId/new', reviewController.createReview)

router.get('/:hotelId', reviewController.getReviewsByHotel)

router.get('/:hotelId/:reviewId', reviewController.getSingleReview)

module.exports = router
