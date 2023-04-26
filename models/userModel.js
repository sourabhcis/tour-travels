const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    default: "user"
  },

},{
  timestamps:true
});

//Export the model

userSchema.pre("save", async function passwordBcrypr(next) {
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  this.password = await bcrypt.hash(this.password, salt);
  // next();
});

userSchema.methods.isPasswordMatched = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
