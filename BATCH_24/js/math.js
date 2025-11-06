// Rounding of numbers
// console.log(Math.round(15.26));
// console.log(Math.round(15.5));
// console.log(Math.ceil(15.001));
// console.log(Math.floor(15.99999));

// Max / Min
// console.log(Math.max(15, 18, 19, 15.2));
// console.log(Math.min(15, 18, 19, 15.2));

// const marks = [15, 19, 18, 26];
// console.log(Math.min(...marks));
// console.log(Math.max(...marks));

// arithmetic operations
// console.log(Math.pow(4, 2)); // 4**2
// console.log(Math.pow(4, 9));
// console.log(Math.sqrt(9));
// console.log(Math.cbrt(27));
// console.log(Math.abs(27));
// console.log(Math.abs(-27));

// Random
// console.log(Math.random()); // number between 0 to 1
const MAX = 100;
// set maximum limit
// console.log(Math.random() * MAX); // 0 to 100
// discarding decimal number
console.log(Math.floor(Math.random() * MAX)); // 0 to 100

// minimum limit
const MIN = 20;
console.log(Math.floor(Math.random() * (MAX - MIN)) + MIN); // 0 to 100
