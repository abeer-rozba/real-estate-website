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

module.exports = {
  createReview
}
