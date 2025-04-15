const { connect } = require("mongoose");

async function connectDB() {
    await connect("mongo_uri")
}

module.exports = connectDB;