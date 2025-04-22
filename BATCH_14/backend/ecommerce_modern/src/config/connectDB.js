const { connect } = require("mongoose");

async function connectDB() {
    await connect("mongodb://localhost:27017/test2");
}

module.exports = connectDB