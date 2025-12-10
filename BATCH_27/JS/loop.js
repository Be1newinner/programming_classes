// for (let i = 0; i < 10; i+=2){
//     console.log(i)
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);



//     i += 2;
// }

//check prime

const num = 12;
let isPrime = true;

for (let i = 2; i < num / 2; i++) {
    if(num % i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime == true) {
    console.log("Prime ");
} else {
    console.log("Not Prime ");
}

