"use client";
import React, { useState } from "react";

export default function ToDo() {
  const [TodoData, setTodoData] = useState([
    {
      id: 1,
      title: "First Item",
    },
    {
      id: 2,
      title: "Second Item",
    },
  ]);

  const [title, setTitle] = useState("");
  const [editID, setEditID] = useState(0);

  function addTodo() {
    if (title) {
      if (editID) {
        setTodoData((items) => [
          ...items.filter((e) => e.id !== editID),
          { id: editID, title },
        ]);
      } else {
        setTodoData((items) => [
          ...items,
          {
            id: Date.now(),
            title: title,
          },
        ]);
      }

      setEditID(0);
      setTitle("");
    } else {
      alert("Title can not be empty!");
    }
  }

  function deleteTodo(id: number) {
    setTodoData((items) => items.filter((e) => e.id !== id));
    alert(`Todo ${id} deleted!`);
  }

  function editTodo(id: number, temp_title: string) {
    setTitle(temp_title);
    setEditID(id);
  }

  return (
    <div className="w-96 bg-white min-h-96 rounded-lg shadow-lg p-4 border border-gray-200 overflow-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
        ToDo List
      </h1>
      <div className="h-1 bg-gray-300 rounded-full mb-4" />
      <div className="flex flex-col items-start gap-3 mb-2">
        <input
          placeholder="Add an item..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          {editID ? "Save" : "ADD"}
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {TodoData.sort((a, b) => a.id - b.id).map((item) => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              editTodoFunction={() => editTodo(item.id, item.title)}
              // editdeleteFunction={deleteTodo}
              editdeleteFunction={() => deleteTodo(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ToDoItem({
  title,
  editTodoFunction,
  editdeleteFunction,
}: {
  title: string;
  editTodoFunction: () => void;
  editdeleteFunction: () => void;
}) {
  return (
    <div className="w-full bg-red-100 border border-red-300 p-3 rounded-md flex justify-between items-center shadow-sm">
      <span className="text-gray-800">{title}</span>
      <div className="space-x-2">
        <button
          onClick={editTodoFunction}
          className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={editdeleteFunction}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
