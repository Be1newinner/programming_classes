// print 0 to 9

for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}

//  print even numbers from 0 to 20
for (let i = 0; i < 21; i = i + 2) {
    console.log(i)
}

// print table of 2
for (let i = 1; i <= 10; i = i + 1) {
    console.log("2 x ", i, " = ", i * 2)
}

// Print prime number
let num = 45;
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
    }
}

if (isPrime == false) {
    console.log("Not Prime!")
} else {
    console.log("Prime!")
}