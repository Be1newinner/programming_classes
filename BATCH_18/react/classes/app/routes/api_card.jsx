import React, { useEffect } from "react";

export default function ApiCard() {
  const [todoData, setTodoData] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  async function fetchTodoData() {
    try {
      // const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
      // const res = await data.json();
      // setTodoData(res);
      // setInterval(() => {
      //   setCounter(counter + 1);
      // }, 1000);
    } catch (error) {
      alert("SOMETHING WENT WRONG!");
      // console.error("SOMETHING WENT WRONG!", error.message);
    } finally {
      // alert("CODE EXECUTED!");
    }
  }

  // useEffect(() => {
  //   console.log({ todoData });
  // }, [todoData]);

  // useEffect(() => {
  //   // fetchTodoData();
  //   const timer = setInterval(() => {
  //     // console.log(counter + 1);
  //     setCounter(counter + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(tim
  // er);
  //   };
  // }, [counter]);

  // useEffect(() => {
  //   // fetchTodoData();
  //   const immid = setImmediate(() => {
  //     // console.log(counter + 1);
  //     setCounter(counter + 1);
  //   }, 2000);

  //   return () => {
  //     clearImmediate(immid);
  //   };
  // }, []);

  // useEffect(() => {
  //   // fetchTodoData();
  //   const timedOut = setTimeout(() => {
  //     // console.log(counter + 1);
  //     setCounter(counter + 1);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timedOut);
  //   };
  // }, []);

  return (
    <div className="flex gap-2 flex-wrap p-4">
      <h2>counter: {counter}</h2>
      {todoData.map((item) => {
        return (
          <div className="w-64 bg-orange-500 p-2 rounded">
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
