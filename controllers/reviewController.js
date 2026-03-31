const Review = require('../models/Review')
const User = require('../models/User')

const createReview = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.session.user.email })
    const review = await Review.create({
      author: user._id,
      hotel: req.params.hotelId,
      rating: req.body.rating,
      title: req.body.title,
      body: req.body.body
    })
    return res.send(review)
  } catch (error) {
    console.error('Error occurred while creating the review: ', error.message)
  }
}

const getReviewsByHotel = async (req, res) => {
  try {
    const reviews = await Review.find({ hotel: req.params.hotelId }).populate(
      'hotel'
    )
    return res.send(reviews)
  } catch (error) {
    console.error(
      'Error occurred while getting reviews of this hotel: ',
      error.message
    )
  }
}

const getSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId)
    return res.send(review)
  } catch (error) {
    console.error('Error occurred while getting this review: ', error.message)
  }
}

module.exports = {
  createReview,
  getReviewsByHotel,
  getSingleReview
}
