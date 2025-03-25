const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/test2")
    console.log("MONGOOSE IS CONNECTED!")
}

module.exports = connectDB;
