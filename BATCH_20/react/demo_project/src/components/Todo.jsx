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

  function editTodo(todo) {
    const newText = prompt("Enter input!", todo.text);

    const clonedArray = [...(todos.clonedArray[0].text = newText)];

    // setTodos((prev) => [
    //   { id: todo.id, text: newText },
    //   ...prev.filter((item) => item.id !== todo.id),
    // ]);
    setTodos(clonedArray);
  }

  function deleteTodo(todoID) {
    setTodos((prev) => [...prev.filter((item) => item.id !== todoID)]);
  }

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
        {todos
          // .sort((a, b) => a.id - b.id)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <span>{todo.text}</span>
                <div>
                  <div onClick={() => editTodo(todo)}>
                    <SquarePen size={16} />
                  </div>
                  <div onClick={() => deleteTodo(todo.id)}>
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
