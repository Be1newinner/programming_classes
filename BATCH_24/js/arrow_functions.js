function call(name, age){
 console.log(name, age);
}

const call2 = (name, age) => {
 console.log(name, age);
}


function sum(a,b){
return a + b;
}


const sum2 = (a,b) => a + b;


call("Vijay", 25)
call2("Vijay", 25)

const result = sum2(10,15);
console.log(result);
