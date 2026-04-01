const User = require('../models/User.js')
const Review = require('../models/Review')

const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      res.status(404).send('user not found')
    }
    const data = {
      _id: user._id,
      username: user.username,
      bookmarks: user.bookmarks,
      reviews: user.reviews
    }
    res.send(data)
  } catch (error) {
    console.error('Error occurred while getting user profile: ', error.message)
  }
}

const editProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after'
    })
    const data = {
      username: user.username,
      email: user.email
    }
    res.send(data)
  } catch (error) {
    console.error('Error occurred in editing the profile !', error.message)
    res.status(500).send('Server error')
  }
}

const showUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ author: req.params.id })

    res.send(reviews)
  } catch (error) {
    console.error('Error occurred while getting user reviews!', error.message)
  }
}

module.exports = {
  showProfile,
  editProfile,
  showUserReviews
}
