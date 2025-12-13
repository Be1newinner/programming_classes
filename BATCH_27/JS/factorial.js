/*
 num = 5
 factorial of num

 1 * 2 * 3 * 4 * ... * num


 */

 const num = 5
 let result = 1;

//  for (let i = 1; i <= num; i++) {
//      result = result * i;
//  }

let i = 1; 
while (i <= num){
result = result * i;
i++;
} 
console.log(result);



