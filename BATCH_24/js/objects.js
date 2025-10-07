// What is an Object?
// we use object DS to store "all the datas" related to a "single entity"!

// CRUD OPERATIONS OF OBJECT
// 1. Creating an object
const person = {
  name: "Vijay",
  age: 27,
  marks: 101,
  isTeacher: true,
  hobbies: ["Programming", "Cartoons", "Driving", "Food"],
  address: {
    plotno: 51,
    city: "delhi",
    state: "delhi",
    postoffices: ["Sangam Vihar", "Deoli"],
  },
};
//
// Key: Value pair
const book = {};

// 2. Read an object and keys
// console.log(person);
console.log(person.name);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address.postoffices[0]);

// 3. Updating an Object
person.name = "Vijay Kumar";
person.hobbies[0] = "Problem Solving";
console.log(person);

// 4. delete a key in an object
delete person.isTeacher;
console.log(person);

// 5. Add keys in Object
person.gender = "MALE";

console.log(person);
