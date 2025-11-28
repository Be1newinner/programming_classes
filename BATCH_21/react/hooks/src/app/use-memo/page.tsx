"use client";
import { useState, useMemo, useCallback } from "react";
import TodoPage from "../todo/page";

// function TodoZ() {
//   const [todos, setTodos] = useState<string[]>([]);

//   return (
//     <div>
//       <h3>Todos ({todos.length})</h3>
//       {todos.map((todo, i) => (
//         <p key={i}>{todo}</p>
//       ))}
//       <button onClick={() => setTodos((t) => [...t, `Todo ${t.length + 1}`])}>
//         Add Todo
//       </button>
//     </div>
//   );
// }

const App = () => {
  const [count, setCount] = useState(0);

  //   const expensiveValue = useMemo(() => {
  //     console.log("Expensive calc running");
  //     let result = 0;
  //     for (let i = 0; i < 1000000000; i++) {
  //       result += count;
  //     }
  //     return result;
  //   }, [count]);

  //   const expensiveFun = useCallback(() => {
  //     console.log("Expensive calc running");
  //     let result = 0;
  //     for (let i = 0; i < 1000000000; i++) {
  //       result += count;
  //     }
  //     return result;
  //   }, [count]);

  return (
    <div>
      <div>
        {/* Count: Expensive: {expensiveValue} */}
        {/* Count: Expensive: {expensiveFun()} */}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      {/* <TodoZ /> */}

      {Array(10000)
        .fill(1)
        .map((e, i) => {
          return <TodoPage key={i} />;
        })}
    </div>
  );
};

export default App;
