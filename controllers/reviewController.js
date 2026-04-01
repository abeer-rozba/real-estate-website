const Review = require('../models/Review')
const User = require('../models/User')
const Hotel = require('../models/Hotel')

const createReview = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.session.user.email })
    await Review.create({
      author: user._id,
      hotel: req.params.hotelId,
      rating: req.body.rating,
      title: req.body.title,
      body: req.body.body
    })

    return res.redirect(`/reviews/${req.params.hotelId}`)
  } catch (error) {
    console.error('Error occurred while creating the review: ', error.message)
  }
}

const getReviewsByHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelId)
    const reviews = await Review.find({ hotel: req.params.hotelId })
      .populate('author')
      .populate('hotel')
    return res.render('./reviews/all.ejs', { reviews, hotel })
  } catch (error) {
    console.error(
      'Error occurred while getting reviews of this hotel: ',
      error.message
    )
  }
}

const getSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId).populate('author')
    return res.render('./reviews/show.ejs', { review })
  } catch (error) {
    console.error('Error occurred while getting this review: ', error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const { rating, title, body } = req.body
    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { rating, title, body },
      { returnDocument: 'after' }
    )
    return res.redirect(`/reviews/${review.hotel._id}/${review._id}`)
  } catch (error) {
    console.error('Error occurred while updating this review: ', error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.reviewId)
    res.render('./reviews/delete.ejs')
  } catch (error) {
    console.error('Error occurred while deleting this review: ', error.message)
  }
}

module.exports = {
  createReview,
  getReviewsByHotel,
  getSingleReview,
  updateReview,
  deleteReview
}
