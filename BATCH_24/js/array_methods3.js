// const names = ["Vijay", "Ajay", "Sanjay"];

// names[0] += " Kumar";
// names[1] += " Kumar";
// names[2] += " Kumar";

// const names2 = names.map((item, index) => {
//   return item + " Kumar";
// });

// console.log(names);
// console.log(names2);

const persons = [
  {
    name: "Vijay",
    age: 25,
    id: 1,
    gender: "M",
  },
  {
    name: "Karan",
    age: 23,
    id: 2,
    gender: "M",
  },
  {
    name: "Sanjay",
    age: 21,
    id: 3,
    gender: "M",
  },
  {
    name: "Gauri",
    age: 21,
    id: 4,
    gender: "F",
  },
];

// const persons2 = persons.map((item, index) => {
//   const fullname =
//     item.gender === "M" ? item.name + " Kumar" : item.name + " Kumari";
//   return {
//     name: fullname,
//     age: item.age,
//     id: item.id,
//   };
// });

// const persons2 = persons.map((item, index) => {
//   const fullname =
//     item.gender === "M" ? item.name + " Kumar" : item.name + " Kumari";
//   return {
//     name: fullname,
//     age: item.age,
//     id: item.id,
//     marks: index % 2 == 0 ? 50 : 100,
//   };
// });

const persons2 = persons.map((item, index) => {
  const fullname =
    item.gender === "M" ? item.name + " Kumar" : item.name + " Kumari";
  return {
    ...item,
    name: fullname,
  };
});

console.log(persons);
console.log(persons2);
