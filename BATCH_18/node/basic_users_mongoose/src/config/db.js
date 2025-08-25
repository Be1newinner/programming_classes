const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://be1newinner:yt0X6Aev8nWYqamF@dummy.7tc0fx0.mongodb.net/sample_mflix"
    );
    console.log("connected successfully!");
  } catch (error) {
    // console.log(error);
    throw Error(error.message);
  }
}

module.exports = connectDB;
