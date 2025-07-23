const start = 5;
const end = 100;

for (let num = start; num < end; num++) {
  // let num = start;
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}
