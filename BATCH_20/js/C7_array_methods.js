const names = ["das", "dsa", "aa", "bb", "aaaa", "ssss"];

const filtererd = [1, 3, 4];

/*
// array methods
// forEach
// two arguments
names.forEach((item, index)=>{

})
// single argument
names.forEach((item)=>{

})
// second argument -- index
// single argument
names.forEach((_,index)=>{
 console.log(index);
})

// with function expression
names.forEach(function (_,index){
 console.log(index);
})

// with function expression
names.forEach(function (_,index){
 console.log(index);
})

// with function expression
names.forEach(function (_,index){
 console.log(index);
})

// predefined function
function callBack(item, index) {
  console.log(item)
}
names.forEach(callBack);

*/

// Map meth         od when you want to modify existing items of array and return a new array
// Original array will not be affected
//
// function mapper(item, index) {
//   return item + "Kumar";
// }

// const names2 = names.map(mapper);

// console.log(names);
// console.log(names2);

/*
// Filter method
function filterMethod(item, index) {
  //   console.log(names);
  //   return !(index == 1 || index == 3);
  return !filtererd.includes(index);
}

const filteredArray = names.filter(filterMethod);

console.log(filteredArray);
*/

// Create an array from Array constructor

// const arr = Array.from({length: 5})
// const arr = Array.from({length: 5}).fill(0)
// const arr = Array.from({length: 50}, (item, index)=>(index + 1)*2)

// const arr = Array.from({length: 26}, (_, index)=>String.fromCharCode(index + 65))

// console.log(String.fromCharCode(65))

// console.log(arr);

// random
Math.random() // output somewhere between  0 to 1

Math.round((Math.random() * (MAX-MIN)) + MIN)

const users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@example.com",
    isActive: true,
    role: "admin",
	stock: 5
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@example.com",
    isActive: false,
    role: "user",
	stock: 5
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@example.com",
    isActive: true,
    role: "user",
	stock: 5
  },
  {
    id: 4,
    name: "User 4",
    email: "user4@example.com",
    isActive: false,
    role: "user",
	stock: 5
  },
  {
    id: 5,
    name: "User 5",
    email: "user5@example.com",
    isActive: true,
    role: "user",
	stock: 5
  },
  {
    id: 6,
    name: "User 6",
    email: "user6@example.com",
    isActive: false,
    role: "user",
	stock: 5
  },
  {
    id: 7,
    name: "User 7",
    email: "user7@example.com",
    isActive: true,
    role: "user",
	stock: 5
  },
  {
    id: 8,
    name: "User 8",
    email: "user8@example.com",
    isActive: false,
    role: "user",
	stock: 5
  },
  {
    id: 9,
    name: "User 9",
    email: "user9@example.com",
    isActive: true,
    role: "user",
	stock: 5
  },
  {
    id: 10,
    name: "User 10",
    email: "user10@example.com",
    isActive: false,
    role: "user",
	stock: 5
  }
];


users.filter((item, index)=>item.isActive === true)

users.find((item, index)=>item.isActive === false)

users.findIndex((item, index)=>item.isActive === false)

const marks = [15,12,14,16,5,7];

marks.reduce((total, item)=>total += item,0)

