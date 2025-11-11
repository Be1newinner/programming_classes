const bcrypt = require("bcrypt");

// const salt = bcrypt.genSaltSync(10);
// const hashed = bcrypt.hashSync("VIJAY", salt);

// console.log(salt);
// console.log(hashed);

const Hashed1 = "$2b$10$8a77nIP3cgcY44pK5HewYuE7AONb0hdN508JcytG0t6cMbpxyudOm";

const hashed2 = "$2b$10$Ck24aC4Mtn47zCBsTL3eR.vKpt91Lpl9nY3RsCsAoawpxoA2y8YEi";

const hashed3 = "$2b$10$SNs.u58tm9M/I0evL9dJ0.UATjXQDeaWaXW4M7GqaAAM/iREhFQ0S";

const isVerified = bcrypt.compareSync("VIJAy", Hashed1)
console.log(isVerified)