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

// If you need only one item then we will use find!
const person = persons.find((item, index) => {
  return item.age > 21;
});
console.log(person);

// If you need more than one item then we will use find!
const filteredPersons = persons.filter((item, index) => {
  return item.age > 21;
});

console.log(filteredPersons);
