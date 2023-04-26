const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_DB_URL);
    console.log("====================================");
    console.log("Database connected");
    console.log("====================================");
  } catch (error) {
    console.log("Connection error");
  }
};

module.exports = dbConnect;
