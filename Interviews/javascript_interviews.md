### **JavaScript Interview Questions – Level 10 (Batch 1)**  

#### **Question 1:**  
**Explain the differences between `setTimeout`, `setImmediate`, and `process.nextTick` in Node.js. When would you use each?**  

**Answer:**  
- `setTimeout(callback, delay)`: Executes the callback after at least `delay` milliseconds. It is scheduled in the **Timers** phase of the Node.js event loop.  
- `setImmediate(callback)`: Executes the callback in the **Check** phase, right after I/O operations. It is faster than `setTimeout(0)`.  
- `process.nextTick(callback)`: Executes the callback **immediately** after the current operation completes, before the event loop moves to the next phase.  

**Use Cases:**  
- Use `setTimeout` when you want a delay.  
- Use `setImmediate` for tasks after I/O operations.  
- Use `process.nextTick` for critical microtasks that must run before the next event loop cycle.  

---

#### **Question 2:**  
**How does the JavaScript engine optimize function execution using Just-In-Time (JIT) compilation? Explain concepts like hidden classes, inline caching, and deoptimization.**  

**Answer:**  
Modern JavaScript engines (like V8) use JIT compilation to convert JS code into machine code at runtime.  

- **Hidden Classes:** Instead of using dynamic properties like in normal JS objects, V8 assigns a hidden class (similar to C++/Java). This makes property lookups faster.  
- **Inline Caching:** If a function is called with similar object shapes, V8 caches the property lookups to avoid repeated calculations.  
- **Deoptimization:** If V8 optimizes a function but later encounters a case that breaks assumptions, it deoptimizes the function and recompiles it dynamically.  

**Example:**  
```js
function Car(make, model) {
  this.make = make;
  this.model = model;
}
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Toyota", "Corolla");
```
Since `car1` and `car2` have the same **hidden class**, their property access is faster due to inline caching.  

---

#### **Question 3:**  
**Implement a deep clone function in JavaScript without using `JSON.parse(JSON.stringify())`. Ensure it handles circular references.**  

**Answer:**  
```js
function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  
  if (seen.has(obj)) return seen.get(obj); // Handle circular references
  
  let copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key], seen);
    }
  }
  return copy;
}

// Test Case
const a = { x: 1 };
a.y = a; // Circular reference
const cloned = deepClone(a);
console.log(cloned); // Should not cause an infinite loop
```
This function uses **WeakMap** to track circular references and prevent infinite loops.  

---

#### **Question 4:**  
**Explain the internals of a JavaScript Promise. How does it work under the hood?**  

**Answer:**  
A **Promise** in JavaScript follows the **Promise/A+ specification** and has three states: **pending, fulfilled, or rejected**.  

- When a new Promise is created, it starts in a **pending** state.  
- The `resolve` function transitions it to **fulfilled**, and the `reject` function transitions it to **rejected**.  
- `then` handlers are queued and executed in the **Microtask Queue** after the current execution stack is cleared.  

**Internal Representation:**  
```js
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.callbacks = [];
    
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.callbacks.forEach((cb) => cb(value));
      }
    };
    
    const reject = (error) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = error;
        this.callbacks.forEach((cb) => cb(error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  
  then(onFulfilled) {
    return new MyPromise((resolve) => {
      this.callbacks.push(() => resolve(onFulfilled(this.value)));
    });
  }
}
```
This simplified implementation captures how Promises register callbacks and execute them asynchronously.  

---

#### **Question 5:**  
**You have an array of integers. Find the subarray with the maximum sum using Kadane’s algorithm.**  

**Answer:**  
Kadane’s algorithm efficiently finds the maximum subarray sum in **O(n)** time.  

```js
function maxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let num of arr) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Test Case
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (subarray: [4, -1, 2, 1])
```
This algorithm ensures we track the highest possible sum while iterating through the array.  

---