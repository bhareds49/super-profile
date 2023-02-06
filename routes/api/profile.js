const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const SuperProfile = require("../../models/SuperProfile");
const User = require("../../models/User");

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await SuperProfile.findOne({ user: req.user.id }).populate(
      "user",
      ["username"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
  } catch (err) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private

router.post(
  "/",
  auth,
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {profile} = req.body;

    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if(profile) profileFields.profile = profile;


    res.send("Hello");

  }
);

module.exports = router;
