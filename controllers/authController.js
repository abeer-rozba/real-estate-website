const bcrypt = require('bcrypt')
const User = require('../models/User')

const registerUser = async (req, res) => {
  try {
    const exists = await User.exists({ email: req.body.email })
    if (exists) return res.send('User already exists!')

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

module.exports = {
  registerUser
}
