import { SquarePen, Trash } from "lucide-react";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");

  /*
1. jab bhi variable banana hai to hum 'const' use krenge.
2. jab bhi variable banaana hai aur wo future me change ho sakta hai tb hum 'let' use krenge.
3. jab bhi variable banana hai, wo change ho sakta hai and uska change screen pe show bhi krna hai to hum useState use krenge  

*/

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "todo 1",
    },
    {
      id: 2,
      title: "todo 2",
    },
  ]);

  function addTodo() {
    setTodos(() => [
      ...todos,
      {
        id: Date.now(),
        title: inputData,
      },
    ]);
    console.log(todos);
  }

  function deleteItem(todo_id) {
    setTodos(() => [...todos.filter((item) => item.id != todo_id)]);
  }

  function editItem(todo_id) {
    const new_input = prompt("enter new todo!");
    setTodos(() =>
      todos.map((item) => {
        if (item.id == todo_id) {
          return {
            id: todo_id,
            title: new_input,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <div className="container">
        <div>
          <input
            placeholder="enter text!"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={addTodo}>ADD</button>
        </div>
        <div>
          {todos.map((item) => {
            return (
              <Task
                title={item.title}
                id={item.id}
                deleteFunction={() => deleteItem(item.id)}
                editFunction={() => editItem(item.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

function Task({ title = "DEFAULT TITLE", id, deleteFunction, editFunction }) {
  return (
    <div className="task">
      <p>
        {id}. {title}
      </p>
      <div>
        <div className="icon_container" onClick={editFunction}>
          <SquarePen />
        </div>
        <div className="icon_container" onClick={deleteFunction}>
          <Trash />
        </div>
      </div>
    </div>
  );
}
