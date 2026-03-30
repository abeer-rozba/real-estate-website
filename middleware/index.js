const passUserToView = (req, res, next) => {
  res.locals.user = req.session.user ? req.session.user : null
  next()
}

//where the user allowed to go
const checkRole = (req, res, next) => {
  const user = req.session.user

  if (!user) {
    return res.redirect("/login")
  }
  if (user.role == "Agent") {
    res.render("./agent/index.ejs")
  } else if (user.role == "Customer") {
    res.render("./customer/index.ejs")
  } else {
    return res.redirect("/login")
  }
  next()
}

module.exports = {
  passUserToView,
  checkRole,
}
