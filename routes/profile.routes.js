const router = require("express").Router();

// const isLoggedIn = (req, res, next) => {
//   if (req.session.user) {
//     next()
//   } else {
//     res.redirect("/auth/login")
//   }
// }

// const isLoggedIn = require("../middlewares/isLoggedIn")
// const isAdmin = require("../middlewares/isAdmin")
const { isLoggedIn, isAdmin } = require("../middlewares/middlewares")

router.get("/", isLoggedIn, (req, res, next) => {
  console.log(req.session.user)
  res.render("profile/profile.hbs")

})

router.get("/admin", isAdmin, (req, res, next) => {

  res.render("profile/admin.hbs")

})


module.exports = router;