const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "please add a email"],
      maxLength: 30,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
