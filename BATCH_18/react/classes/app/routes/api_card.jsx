import React, { useEffect } from "react";

export default function ApiCard() {
  const [todoData, setTodoData] = React.useState([]);

  async function fetchTodoData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const res = await data.json();

    setTodoData(res);
  }

  useEffect(() => {
    console.log({ todoData });
  }, [todoData]);

  useEffect(() => {
    fetchTodoData();
  }, []);
  return (
    <div className="flex gap-2 flex-wrap p-4">
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
