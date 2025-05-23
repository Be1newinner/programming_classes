function countCharFrequency(str) {
  const freq = {};

  for (const char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}

const input = "banana";
console.log(countCharFrequency(input));
// Output: { b: 1, a: 3, n: 2 }
