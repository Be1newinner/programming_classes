/*
for(let i = 0; i < 10; i++){

 console.log(i);

}

==========================================================

let i = 0;

while(i < 10){

console.log(i)


i++;
}

========================================================

Question. prime

 number jo 1 se ya khud se divide!

 Step 1 = 2,3,4,5,6
 

*/

const num = 11;
let divided = false;

for(let i = 2; i < num; i += 1){
 if (num%i == 0) {
    divided = true;
    break;
  }
}

if (divided === true){
    console.log("NOT PRIME");
} else {
    console.log("PRIME");
}



