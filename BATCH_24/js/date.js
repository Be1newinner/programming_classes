// Prining current Date
// const dt = Date.now();
// console.log(dt); // output current date in milliseconds

const DateInMill = 1761420068408;

const dt2 = new Date();

// console.log(typeof dt2)
// console.log(dt2.toISOString()); // date time in ISO format
// console.log(dt2.toUTCString()); // date time in UTC format
// console.log(dt2.toDateString()); // date in UTC format
// console.log(dt2.toTimeString()); // time in UTC format
// console.log(dt2.toLocaleString()); // current time zone

// const persons = [
//   "2025-11-06T09:30:44.430Z",
//   "2025-11-10T09:30:44.430Z",
//   "2025-11-08T09:30:44.430Z",
// ];

// persons.sort();

// console.log(dt2.getTime()); // prints milliseconds
// console.log(dt2.getHours());
// console.log(dt2.getMinutes());
// console.log(dt2.getSeconds());
// console.log(dt2.getDay());
// console.log(dt2.getDate());
// console.log(dt2.getMonth());
// console.log(dt2.getFullYear());

// convert milliseconds into Date String

// const dt3 = new Date(DateInMill);
// console.log(dt3);

const dob = new Date();
dob.setFullYear(1997);
dob.setMonth(2);
dob.setDate(15);

// console.log(dob.getTime());

const curr = Date.now();

console.log((curr - dob.getTime()) / 1000); // converted in seconds
console.log((curr - dob.getTime()) / 1000 / 60); // converted in minutes
console.log((curr - dob.getTime()) / 1000 / 60 / 60); // converted in hours
console.log((curr - dob.getTime()) / 1000 / 60 / 60 / 24); // converted in days
console.log((curr - dob.getTime()) / 1000 / 60 / 60 / 24 / 365); // converted in month
// console.log((curr - dob.getTime()) / 1000 / 60 / 60 / 30); // converted in month
