### 1. Factorial

**Definition:** The product of all positive integers from 1 up to $$n$$. Often written as $$n!$$.

- **Example:** Input: `n = 5` → Output: `120` (_because_ $$5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$$)

### 2. Fibonacci sequence

**Definition:** A series where the next term is the sum of the previous two, starting with 0 and 1.

- **Example:** Input: `n = 6` terms → Output: `0, 1, 1, 2, 3, 5`

### 3. Happy numbers

**Definition:** A number is _happy_ if repeatedly replacing it by the sum of the squares of its digits eventually results in 1.

- **Example:** Input: `19` → Output: `true` (_because_ 1²+9²=82 → 8²+2²=68 → 6²+8²=100 → 1²+0²+0²=1)

### 4. List of prime numbers between two numbers

**Definition:** Primes are natural numbers greater than 1 with no divisors other than 1 and themselves.

- **Example:** Input: `start = 10, end = 20` → Output: `[11, 13, 17][19]`

### 5. Prime + happy numbers

**Definition:** A number that is _both_ prime and happy.

- **Example:** Input: `limit = 50` → Output: `[7, 13, 19][23][31]` (these are primes, and applying the happy number test yields 1 eventually)

### 6. Armstrong number (also called **narcissistic number**)

**Definition:** A number in which the sum of its digits each raised to the _power of the number of digits_ equals the number itself.

- **Example:** Input: `153` → Output: `true` (_because_ $$1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$$)

### 7. Replace all "o" from "J" in "Robbin Hood"

**Definition:** Replace every occurrence of the letter "o" in the given string with "J".

- **Example:** Input: `"Robbin Hood"` → Output: `"Rjbbin Hjjd"`

### 8. LCM (Least Common Multiple)

**Definition:** The smallest positive integer that is a multiple of two given integers.

- **Example:** Input: `6, 8` → Output: `24` (_because_ 24 is the smallest number divisible by both)

### 9. HCF (Highest Common Factor) / GCD (Greatest Common Divisor)

**Definition:** Largest positive integer that divides the given integers without leaving a remainder.

- **Example:** Input: `12, 18` → Output: `6`

### 10. Combination

**Definition:** The number of ways to choose $$r$$ elements from $$n$$ elements without regard to order. Formula: $$\binom{n}{r} = \frac{n!}{r!(n-r)!}$$

- **Example:** Input: `n = 5, r = 3` → Output: `10`

### 11. Permutation

**Definition:** The number of ways to arrange $$r$$ elements from $$n$$ elements with order mattering. Formula: $$P(n, r) = \frac{n!}{(n-r)!}$$

- **Example:** Input: `n = 5, r = 3` → Output: `60`

### 12. Palindrome

**Definition:** A string or number that reads the same forward and backward.

- **Example:** Input: `"madam"` → Output: `true`
- **Example:** Input: `121` → Output: `true`
