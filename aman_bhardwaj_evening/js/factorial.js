// 5*4*3*2*1 = 120

let num = 10;
let result = 1; // default will be 1 if multiply or divide else 0;

for(let i = 1; i <= num;i++){
  result = result*i; 
}

console.log(result);

/*
i = 1;
result = 1 * 1 = 1;

i = 2;
result = 1 * 2 = 2;

i = 3;
result = 2 * 3 = 6;

i = 4;
result = 6 * 4 = 24;

i = 5;
result = 24 * 5 = 120;

*/
