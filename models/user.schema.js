const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fullname:{
      type : String,
      trim : true,   
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: [3, "Username must be atleast 3 characters long"],
      maxLength: [20, "Username must not exceed 20 characters"],
      trim: true,
    },
    password: String,
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid Email Format"],
      trim: true,
    },
  });
  const UserSchema = mongoose.model("User", userSchema);
  module.exports = UserSchema;
  