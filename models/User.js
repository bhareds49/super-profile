//create a schema with mongoose
var mongoose = require("mongoose");

//create user schema
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        //type: mongoose.Schema.Types.ObjectId,
      },
});

module.exports = User = mongoose.model('user', userSchema);