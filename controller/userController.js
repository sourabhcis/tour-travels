const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");

const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body.email;
  const findUser = await User.findOne(email);
  if (!findUser) {
    //create new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // user already exit
    // res.json({ msg: "User Already Exists", success: false });
    throw new Error("User Already Exist");
  }
});








module.exports = { createUser};
