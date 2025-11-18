"use client";
import React, { useEffect, useState } from "react";

export default function ApiCall() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodos().then((e) => {
      setTodos(e);
      //   console.log(e);
    });
  }, []);

  return (
    <div>
      <h1>TODOS</h1>
      {todos.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
