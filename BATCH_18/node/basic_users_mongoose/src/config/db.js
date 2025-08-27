const mongoose = require("mongoose");

async function connectDB() {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;

    if (!MONGODB_URL) throw Error("MONGODB URL IS REQUIRED!");

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected successfully!");
  } catch (error) {
    // console.log(error);
    throw Error(error.message);
  }
}

module.exports = connectDB;
