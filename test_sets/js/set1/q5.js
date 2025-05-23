function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;

  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), power);
  }, 0);

  return sum === num;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123)); // false
