const bcrypt = require('bcrypt')
const User = require('../models/User')

const registerUser = async (req, res) => {
  try {
    const exists = await User.exists({ email: req.body.email })
    if (exists) return res.send('This user already exists!')

    if (req.body.password !== req.body.confirmPassword)
      return res.send('Password and confirm password must match!')

    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    req.body.password = hashedPassword

    await User.create(req.body)
    res.send('User registered')
  } catch (error) {
    console.log(`An error has occurred while signing up: ${error.message}`)
  }
}

const signUserIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.send('User does not exist. Please sign up.')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.send('Incorrect password!')

    req.session.user = {
      email: user.email,
      _id: user._id
    }

    req.session.save(() => {
      res.send(`Thank you for signing in, ${user.username}`)
    })
  } catch (error) {
    console.log(`An error has occurred while signing in: ${error.message}`)
  }
}

module.exports = {
  registerUser,
  signUserIn
}
