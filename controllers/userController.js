const User = require("../models/User.js")

const getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await User.find({})

    res.render("./bookmarks/bookmarks.ejs", { bookmarks })
  } catch (error) {
    console.error("Error occurred in getting all bookmarks !", error.message)
  }
}
const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.render("./users/show.ejs", { user })
  } catch (error) {
    console.error("Error occurred in getting user by id !", error.message)
  }
}
module.exports = {
  getAllBookmarks,
  showProfile,
}
