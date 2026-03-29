const passUserToView = (req, res, next) => {
  res.locals.user = req.session.user ? req.session.user : null
  next()
}

module.exports = {
  passUserToView,
}

//pass user to view
//check user role
