const persons = [
  {
    name: "Vijay",
    age: 25,
    id: 1,
    gender: "M",
    balance: 150,
  },
  {
    name: "Karan",
    age: 23,
    id: 2,
    gender: "M",
    balance: 160,
  },
  {
    name: "Sanjay",
    age: 21,
    id: 3,
    gender: "M",
    balance: 170,
  },
  {
    name: "Gauri",
    age: 21,
    id: 4,
    gender: "F",
    balance: 180,
  },
];

// let total = 0;

// for (const item of persons) {
//   total += item.balance;
// }

// console.log(total);

const bal = persons.reduce((total, item, index) => {
  return total + item.balance;
}, 0);

console.log(bal);
