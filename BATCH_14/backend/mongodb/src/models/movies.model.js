const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
    title: String,
    duration: Number,
    rating: Number,
    isWatched: Boolean,
    genres: [String]
})

exports.MoviesModel = model("movie", moviesSchema);
