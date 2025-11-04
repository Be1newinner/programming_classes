// Example: Input: 19 → Output: true (because 1²+9²=82 → 8²+2²=68 → 6²+8²=100 → 1²+0²+0²=1)
/*

 19 = 1 9
    1^2 = 1 
    9^2 = 81
        1 + 81 = 82
    
    82 = 8 2
        8^2 = 64
        2^2 = 4
            64 + 4 = 68
        
        6^2 = 36
        8^2 = 64
            36 + 64 = 100

            100 = 1 0 0 
            1^2 = 1
*/

let num = 11;

while (true) {
  let numArr = String(num).split("");
  num = 0;
  numArr.forEach((item) => {
    num += Number(item) ** 2;
  });

  if (String(num).length === 1) {
    if (num === 1) {
      console.log("this is happy number");
    } else {
      console.log(num);
      console.log("this is not a happy number");
    }
    break;
  }
  console.log(num);
}
