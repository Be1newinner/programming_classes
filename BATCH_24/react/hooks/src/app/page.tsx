"use client";

import { useState } from "react";

export default function HomePage() {
  // let count = 5;

  const [count, setCount] = useState(2);
  // Rule to know when to create a variable using use state
  // jab bhi koi variable update hoga and uska update screen pe show krna hoga
  // use state ki value ko screen pe show krne k liye array ka first part use hoga e.g. count
  // use state ki value ko update krne k liye sirf array k andar k second part mtlb function ko use krna hai e.g. setCount

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 id="_counter">Counter : {count}</h1>
        <button
          onClick={() => {
            // count++;
            // document.getElementById("_counter").innerHTML = count;

            setCount(count + 1);
            console.log(count);
          }}
        >
          Increase
        </button>
        <br />
        <button
          onClick={() => {
            // count--;
            setCount(count - 1);
            console.log(count);
          }}
        >
          Decrease
        </button>
      </main>
    </div>
  );
}

/*
 Cases : this is the pattern to write the name of variables of functions
 types of cases
 1. PascalCase -> React ka pattern
 2. snake_case -> python
 3. camelCase  -> javasscript
 4. kebab-case
*/
