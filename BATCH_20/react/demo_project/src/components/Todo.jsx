import React from "react";
import { Trash2, SquarePen } from "lucide-react";

export default function Todo() {
  const todos = [
    {
      id: 1,
      text: "i will woke up someday 1!",
    },
    {
      id: 2,
      text: "i will woke up someday 2!",
    },
    {
      id: 3,
      text: "i will woke up someday 3!",
    },
    {
      id: 4,
      text: "i will woke up someday 4!",
    },
    {
      id: 5,
      text: "i will woke up someday 5!",
    },
    {
      id: 6,
      text: "i will woke up someday 6!",
    },
  ];

  return (
    <div className="container">
      <div>
        <input placeholder="enter title!" />
        <button>ADD</button>
      </div>

      <div>
        {todos.map((todo) => {
          return (
            <div>
              <span>{todo.text}</span>
              <div>
                <div>
                  <SquarePen size={16} />
                </div>
                <div>
                  <Trash2 size={16} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
