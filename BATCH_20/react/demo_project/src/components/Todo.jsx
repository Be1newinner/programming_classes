import { Trash2, SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
// import { v4 as uuid } from "uuid"; // For uuid package

export default function Todo() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([
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
  ]);

  function addTodo() {
    // method 1
    // const temp_todo = [
    //   ...todos,
    //   {
    //     id: 6,
    //     text: inputValue,
    //   },
    // ];
    // setTodos(temp_todo);

    // method 2
    // temp_todo.push({
    //   id: 6,
    //   text: inputValue,
    // });

    // method 3
    // setTodos([
    //   ...todos,
    //   {
    //     id: 6,
    //     text: inputValue,
    //   },
    // ]);

    // method 4
    setTodos((prev) => [
      ...prev,
      {
        // id: uuid(),
        id: Date.now(),
        text: inputValue,
      },
    ]);
  }

  useEffect(() => {
    console.table(todos);
  }, [todos]);

  return (
    <div className="container">
      {/* {inputValue} */}
      <div>
        <input
          placeholder="enter title!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
      </div>

      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
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
