let age = -5;

// Type 1
// if(age >= 18) {
//     console.log("User can vote!")
// } else {
//     console.log("User cannot vote!")
// }


// Type 2 : Else if ladder

if(age > 18 && age < 100) {
    console.log("User can vote!")
} else if(age < 18 && age > 0) {
    console.log("User cannot vote!")
} else if(age == 18) {
    console.log("Wait for one year!")
} else {
    console.log("Invalid age!")
}