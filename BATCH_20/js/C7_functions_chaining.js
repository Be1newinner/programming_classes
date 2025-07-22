// Homework
const obj = {
  names: [],
  push: function (name) {
    this.names.push(name);
    return {
      name: this.name,
      console: function () {
        console.log(name);
      },
    };
  },
  console: function () {
    console.log(this.names);
  },
};

obj.push("Something").console();
obj.push("dasd");

console.log(obj.names);
