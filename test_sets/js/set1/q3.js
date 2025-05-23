function groupByAge(people) {
  const grouped = {};

  for (const person of people) {
    const { age, name } = person;

    if (!grouped[age]) {
      grouped[age] = [];
    }

    grouped[age].push({ name }); 
  }

  return grouped;
}

const people = [
  { name: "Vijay", age: 25 },
  { name: "Amit", age: 30 },
  { name: "Ravi", age: 25 }
];

console.log(groupByAge(people));
// {
//   25: [
//     { name: "Vijay", age: 25 },
//     { name: "Ravi", age: 25 }
//   ],
//   30: [{ name: "Amit", age: 30 }]
// }