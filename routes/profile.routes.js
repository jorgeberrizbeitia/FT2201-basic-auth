const router = require("express").Router();

// const isLoggedIn = (req, res, next) => {
//   if (req.session.user) {
//     next()
//   } else {
//     res.redirect("/auth/login")
//   }
// }

const isLoggedIn = require("../middlewares/isLoggedIn")

router.get("/", isLoggedIn, (req, res, next) => {
  console.log(req.session.user)
  res.render("profile.hbs")

})


module.exports = router;