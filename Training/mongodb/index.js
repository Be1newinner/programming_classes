const { MongoClient } = require("mongodb");

const MONGO_URI = "mongodb://localhost:27017/";
const DB_NAME = "test3"

const client = new MongoClient(MONGO_URI)

let db = client.db(DB_NAME);


// ==================== find query
// const data = db.collection("user").find({});
// data.toArray().then(e => {
//     console.log({ data: e })
// }).finally(() => {
//     client.close();
// })
//
// 
// ==================== find single document
// 
const data = db.collection("user").findOne({
    name: "Vijay"
});
data.then(e => {
    console.log(e)
}).finally(() => {
    client.close();
})
//
// insertOne
// const data = db.collection("user").find({});
// data.toArray().then(e => {
//     console.log({ data: e })
// }).finally(() => {
//     client.close();
// })
