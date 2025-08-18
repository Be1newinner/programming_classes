// function a() {
//   console.log("A");
// }
// function b() {
//   console.log("B");
// }
// function c() {
//   a();
// }
// function d() {
//   b();
// }

// function e(cb) {
//   cb();
// }

function fullname(fname) {
  return fname + " Kumar";
}

function fullname2(fname) {
  return fname + " Kumari";
}

function marksInPercent(marksInt) {
  return marksInt / 100 + "%";
}

/*
 details is a function.
 name: function
 marks: function
 user: object
*/
function details(name, marks, user) {
  const nameStatement = "My name is " + name(user.name);
  const marksStatement = "My marks are " + marks(user.mark);
  return nameStatement + "." + marksStatement;
}

// d();
// e(c);
const user = {
  name: "Vijay",
  mark: 25,
};
const user2 = {
  name: "ritu",
  mark: 5,
};

const result = details(fullname, marksInPercent, user);
const result2 = details(fullname2, marksInPercent, user2);
console.log(result);
