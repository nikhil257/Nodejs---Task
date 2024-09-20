const express = require("express");
const router = express.Router();
const UserSchema = require("../models/user.schema");

router.get("/signup", async (req, res) => {
  res.render("signupuser", {
    title: "Signup",
    user: req.user,
  });
});

router.post("/signup", async (req, res, next) => {
  try {
    const { fullname, username, email, password } = req.body;
    await UserSchema({ fullname, username, email }, password);
    res.redirect("/user/signin");
  } catch (error) {
    next(error);
  }
});

router.get("/signin", async (req, res, next) => {
  res.render("signinuser", {
    title: "Signin User",
    user: req.user,
  });
});

router.post("/signin", async (req, res, next) => {
  try {
    res.redirect("/user/profile");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/profile", async (req, res, next) => {
  try {
    res.render("profileuser", {
      title: "Profile",
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/signout", async (req, res, next) => {
  res.redirect("/user/signin");
});

router.get("/update", async (req, res) => {
  res.render("updateuser", {
    title: "Update Profile",
    user: req.user,
  });
});

router.post("/update", async (req, res, next) => {
  try {
    await UserSchema.findByIdAndUpdate(req.user._id, req.body);
    res.redirect("/user/profile");
  } catch (error) {
    next(error);
  }
});

router.get("/delete-account", async (req, res, next) => {
  try {
    await UserSchema.findByIdAndDelete(req.user);
    res.redirect("/user/signin");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
