
// const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongo_uri";

// const client = new MongoClient(uri);


// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)

//     await client.connect();
//     // Get the database and collection on which to run the operation
//     const database = client.db("sample_mflix");
//     const movies = database.collection("movies");
//     // Query for a movie that has the title 'The Room'
//     const query = { title: "The Room" };
//     const options = {
//       // Sort matched documents in descending order by rating
//       sort: { "imdb.rating": -1 },
//       // Include only the `title` and `imdb` fields in the returned document
//       projection: { _id: 0, title: 1, imdb: 1 },
//     };
//     // Execute query
//     const movie = await movies.findOne(query, options);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
