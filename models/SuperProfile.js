const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  profile: {
    type: String,
    //type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = SuperProfile = mongoose.model("super-profile", ProfileSchema);