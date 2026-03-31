const User = require('../models/User.js')

const getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await User.find({})

    console.log("All your bookmarks are here!")
    res.render("./user/bookmarks.ejs", { bookmarks })
  } catch (error) {
    console.error('Error occurred in getting all bookmarks !', error.message)
  }
}
const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.render('./users/show.ejs', { user })
  } catch (error) {
    console.error('Error occurred in getting user by id !', error.message)
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
  updateProfile,
}
