// CLI => COMMAND LINE INTERFACE

// Find
// db.[collection].findOne = single document

// method 1 with projection ===== mongooose
db.users.findOne({
    age: 29
}).select({
    email: false,
}).sort({
    age: 1 // -1 means descending order
})

// method 2 of projection
// db.users.findOne({
//     age: 29
// }, {
//     name: false
// })

// method 3 of projection ===== mongooose
db.users.findOne({
    age: 29
}, "-_id")

// db.[collection].find = multiple document find


// ========================================================

/*
 2. update
        // a. db.users.updateOne()

*/



// Update One

db.users.updateOne({ age: 29 }, {
    $set: {
        name: "Vijay"
    }
})

// returns : 
// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 1,
//     modifiedCount: 1,
//     upsertedCount: 0
//   }

// Upsert method of updateOne

db.users.updateOne({ age: 100 }, {
    $set: {
        name: "Vijay"
    }
}, {
    upsert: true
})