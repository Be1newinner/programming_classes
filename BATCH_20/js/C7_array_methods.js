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

// Filter method
function filterMethod(item, index) {
  //   console.log(names);
  //   return !(index == 1 || index == 3);
  return !filtererd.includes(index);
}

const filteredArray = names.filter(filterMethod);

console.log(filteredArray);
