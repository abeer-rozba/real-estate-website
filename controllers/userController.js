const User = require('../models/User.js')

const getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await User.find({})
    return res.send(bookmarks)
  } catch (error) {
    console.error('Error occurred while getting all bookmarks: ', error.message)
  }
}
const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    return res.send(user)
  } catch (error) {
    console.error('Error occurred while getting user profile: ', error.message)
  }
}

const editProfile = async (req, res) => {
  try {
    await User.findOneAndUpdate({ username: req.session.user.username })
  } catch (error) {}
}

const updateProfile = async (req, res) => {}

module.exports = {
  getAllBookmarks,
  showProfile,
  editProfile,
  updateProfile
}
