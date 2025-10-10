// Assigning a name to set of instructions to be followed!

// syntax for defining functions
function function_name() {
  // set of instructions will be here!
}

//  syntax for using | call | invoke functions
function_name();

// function hello() {
//   const a = "45";
//   const name = "Vijay";
//   const age = 27;

//   console.log(a, name, "AGE = ", age);
// }
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();

// function  can be categories based on two things!
// 1. return type
// -- a. without return
// -- b. with return
// 2. arguments
// -- a. with arguments
// -- b. without arguments

// WIHT 2 ARGUMENTS
// function sum(a, b) {
//   const result = a + b;
//   console.log("result is ", result);
// }

// sum(45, 30);
// sum(5, 3);
// sum(5, 4);
// sum(6, 4);

// With Object and number type arguemnt

// function sum(person, value) {
//   // person = {name, age, id}
//   const name = "MY NAME IS " + person.name;
//   const age = "MY AGE IS " + person.age;
//   const id = "MY id IS " + person.id;
//   const vla = "MY VALUE IS " + value;

//   console.log(name, age, id, vla);
// }

function sum({ name, age, id }, value) {
  // person = {name, age, id}
  const name2 = "MY NAME IS " + name;
  const age2 = "MY AGE IS " + age;
  const id2 = "MY id IS " + id;
  const vla = "MY VALUE IS " + value;

  console.log(name2, age2, id2, vla);
}

// sum(
//   {
//     name: "Vijay",
//     age: 27,
//     id: 1,
//   },
//   25
// );

// sum(
//   {
//     name: "Ajay",
//   },
//   100
// );

// sum();

// RETURN FUNCTIONS

function multiply(a, b, c) {
  const result = a * b * c;
  //   console.log(result);
  return result;
}

function calculations(a, b, c) {
  const multiply = a * b * c;
  const divide = a / b / c;
  const sum = a + b + c;
  const sub = a - b - c;
  const result = {
    mult: multiply,
    div: divide,
    sum: sum,
    sub: sub,
  };
  //   console.log(result);
  return result;
}

const rs = calculations(4, 5, 9);

console.log("YOUR ANSWER IS ", rs.sub);
