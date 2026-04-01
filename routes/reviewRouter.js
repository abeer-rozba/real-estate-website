const express = require('express')
const router = express.Router()
const Hotel = require('../models/Hotel')
const Review = require('../models/Review')
const reviewController = require('../controllers/reviewController')

router.get('/:hotelId/new', async (req, res) => {
  const hotel = await Hotel.findById(req.params.hotelId)
  res.render('./reviews/new.ejs', { hotel })
})
router.post('/:hotelId/new', reviewController.createReview)

router.get('/:hotelId', reviewController.getReviewsByHotel)

router.get('/:hotelId/:reviewId', reviewController.getSingleReview)
router.delete('/:hotelId/:reviewId', reviewController.deleteReview)

router.get('/:hotelId/:reviewId/edit', async (req, res) => {
  const review = await Review.findById(req.params.reviewId).populate('hotel')
  res.render('./reviews/edit.ejs', { review })
})
router.put('/:hotelId/:reviewId/edit', reviewController.updateReview)

module.exports = router
