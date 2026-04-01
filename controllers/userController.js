const User = require("../models/User.js")

// const getAllBookmarks = async (req, res) => {
//   try {
//     const bookmarks = await User.find({})

//     console.log("All your bookmarks are here!")
//     res.render("./user/bookmarks.ejs", { bookmarks })
//   } catch (error) {
//     console.error("Error occurred in getting all bookmarks !", error.message)
//   }
// }

//tested successfully
const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      res.status(404).send("user not found")
    }
    // res.send(`User Found:username:${user.username} , email:${user.email} `)
    res.render("./users/show.ejs", { user })
  } catch (error) {
    console.error("Error occurred in getting user by id !", error.message)
  }
}

const editProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
    // res.send(
    //   `User updated :New username:${user.username} , New email:${user.email} `
    // )
    res.redirect("./users/show.ejs", { user })
  } catch (error) {
    console.error("Error occurred in editing the profile !", error.message)
    res.status(500).send("Server error")
  }
}

module.exports = {
  // getAllBookmarks,
  showProfile,
  editProfile,
}
