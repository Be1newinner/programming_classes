/*
// function declaration
function greet() {
  console.log("Hello 1");
  console.log("Hello 2");
  console.log("Hello 3");
  console.log("Hello 4");
  console.log("Hello 5");
  console.log("Hello 6");
}

// arrow function
const greet = () => {
  console.log("Hello 1");
  console.log("Hello 2");
  console.log("Hello 3");
  console.log("Hello 4");
  console.log("Hello 5");
  console.log("Hello 6");
}

// function calling / invoking
greet();
*/

// function parameters
// function expression
// function fullname(fname, lname) {
//   const result = fname + " " + lname;
//   return result;
// }

// const fullname = (fname, lname) => {
//   const result = fname + " " + lname;
//   return result;
// };

const fullname = (fname, lname) => fname + " " + lname;

const full = fullname("Vijay", "Kumar");
const full2 = fullname("Ajay", "Kumar");

console.log(full);
console.log(full2);
