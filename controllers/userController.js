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
      reviews: user.reviews
    }
    return res.render('./users/show.ejs', { data })
  } catch (error) {
    console.error('Error occurred while getting user profile: ', error.message)
  }
}

const editProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after'
    })

    req.session.user = {
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email
    }

    res.redirect(`/users/${req.params.id}`)
  } catch (error) {
    console.error('Error occurred in editing the profile !', error.message)
    res.status(500).send('Server error')
  }
}

const showUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ author: req.params.id }).populate(
      'hotel'
    )

    res.render('./users/my-reviews.ejs', { reviews })
  } catch (error) {
    console.error('Error occurred while getting user reviews!', error.message)
  }
}

module.exports = {
  showProfile,
  editProfile,
  showUserReviews
}
