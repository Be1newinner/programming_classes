import "./App.css"
import { useState } from "react"

export default function App() {

  const [addInput, setAddInput] = useState("")

  const items = [
    {
      id: 1,
      text: "task 1"
    },
    {
      id: 2,
      text: "task 2"
    },
    {
      id: 3,
      text: "task 3"
    },
    {
      id: 4,
      text: "task 4"
    }
  ]

  function addItemToDo() {
    // alert("HELLO")
  }

  return (
    <div className="todo_container">
      <h1>TODO LIST</h1>
      <hr />
      {addInput}
      <input placeholder="add items..." value={addInput} onChange={(event) => {
        setAddInput(event.target.value)
      }} />
      
      <button className="black" onClick={addItemToDo}>ADD ITEM</button>

      <div className="content">
        {items.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.text}</p>
              <div>
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}