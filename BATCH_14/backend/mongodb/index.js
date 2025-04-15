const express = require('express')
const connectDB = require('./connectDB')
const { MoviesModel } = require('./src/models/movies.model')
const app = express()
const port = 3002

app.get('/', async (req, res) => {
  const data = await MoviesModel.create({
    title: "Bat Man",
    duration: 200,
    rating: 8.9,
    isWatched: true,
    genres: ["action", "thriller"]
  })
  res.send({ data })
})

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}).catch((error) => {
  console.log(error);
})

