// type 1

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 3; i <= num / 2; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

// type 2
function isPrime2(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(2));     // true
console.log(isPrime(7));     // true
console.log(isPrime(4));     // false