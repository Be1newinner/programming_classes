# 📄 Full Stack Developer – JavaScript/Python Fundamentals Assignment

**Total Questions: 9**
**Duration**: 60 minutes
**Instructions**:

## 🔢 Section A: Array & Object Manipulation (5 × 10 = 50 Marks)

### 1. **Find Subarrays with a Given Sum** *(10 marks)*

Write a function that returns all **contiguous subarrays** whose sum is equal to a given target.

* **Input**: `arr = [1, 2, 3, 4, 5]`, `target = 5`
* **Output**: `[[2, 3], [5]]`
---

### 2. **Character Frequency in a String** *(10 marks)*

Write a function to count the frequency of each character in a string.

* **Input**: `"banana"`
* **Output**: `{ b: 1, a: 3, n: 2 }`

---

### 3. **Group by Age** *(10 marks)*

Write a function that groups people by age from an array of objects.

* **Input**:

```js
[
  { name: "Vijay", age: 25 },
  { name: "Amit", age: 30 },
  { name: "Ravi", age: 25 }
]
```

* **Output**:

```js
{
  25: [{ name: "Vijay" }, { name: "Ravi" }],
  30: [{ name: "Amit" }]
}
```

---

### 4. **Check Prime Number** *(10 marks)*

Write a function to check if a number is **prime**.

* **Input**: `7`
* **Output**: `true`

---

### 5. **Check Armstrong Number** *(10 marks)*

An **Armstrong number** of `n` digits is equal to the sum of its digits each raised to the power of `n`.

* **Input**: `153`
* **Output**: `true`
  (since $1^3 + 5^3 + 3^3 = 153$)

---

## 🔍 Section B: Logical Thinking & UI Simulation (5 × 10 = 50 Marks)

### 6. **ToDo List CRUD in Memory** *(10 marks)*

Implement a simple **ToDo system in memory** using an array in react. Support the following operations:

* `addTask()`
* `getAllTasks()`
* `deleteTask(index)`
* `updateTask(index, newText)`

---


### 7. **Multipage UI Navigation (React/Next.js)** *(10 marks)*

Create a simple multipage frontend using React or Next.js with:

* Navigation bar with 3 pages: Home, About, Contact
* Highlight the **active page** in the navbar
* Use `Link` and `useRouter` or conditional styling

---

### 8. **Click to Toggle Sidebar with Smooth Transition (Frontend)** *(10 marks)*

Build a sidebar that appears/disappears smoothly when a button is clicked.

* Sidebar should slide in/out using CSS transitions
* Button should toggle the sidebar
* Highlight current page (if multipage)