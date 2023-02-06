const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");

//bring in user model
const User = require("../../models/User");
const { ObjectId } = require("bson");
const auth = require("../../middleware/auth");

// @route   GET api/users
// @desc    Get all profiles
// @access  Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/users/id/:id
// @desc    Get a single profile by id
// @access  Public
router.get("/id/:id", async (req, res) => {
  try {
    const user = await User.find(ObjectId(req.params.id));
    if (!user) return res.status(400).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "User not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   GET api/users/:username
// @desc    Get a single profile by username
// @access  Public
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) return res.status(400).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "User not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("username", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //if there are errors return res status
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, profile } = req.body;

    try {
      let user = await User.findOne({ email });
      //let user2 = await User.findOne({ username });
      //check if user exists
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists!" }] });
      }

      user = new User({
        username,
        email,
        password,
        profile,
      });

      //encrypt password using bcrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      //res.send("User registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   POST api/users
// @desc    Create or update user profile
// @access  Private

/* router.post("/", auth , async (req, res) => {
  
  const errors = validationResult(req);
    //if there are errors return res status
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { profile } = req.body;

    try {
      let user = await User.findOne({ email });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  
}); */

module.exports = router;

