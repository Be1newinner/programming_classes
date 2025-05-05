import "./App.css"
import { useState } from "react"

export default function App() {

  const [addInput, setAddInput] = useState("")

  const [items, setItems] = useState([
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
  ]);

  function addItemToDo() {

    // if (addInput) {
    //   // method 1
    //   // const tempItems = [...items];
    //   // tempItems.push({
    //   //   id: 1,
    //   //   text: addInput
    //   // })
    //   // setItems(tempItems)

    //   // method 2
    //   // setItems([...items, {
    //   //   id: 1,
    //   //   text: addInput
    //   // }])

    //   // method 3
    //   setItems((prev) => [...prev, {
    //     id: 1,
    //     text: addInput
    //   }])

    //   setAddInput("")

    // } else {
    //   alert("Input text is empty!")
    // }

    if (!addInput) return alert("Input text is empty!");

    setItems((prev) => [...prev, {
      id: Date.now(),
      text: addInput
    }])

    setAddInput("")
  }


  function deleteTodo(id: number) {
    // alert(id);
    // 
    // 1
    // const tempArray = items.filter(e=>e.id != id)
    // setItems(tempArray)
    // 
    // 2
    // setItems(items.filter(e => e.id != id))
    //
    // 3 
    setItems(prev => prev.filter(e => e.id != id))
  }


  function editTodo(id: number) {
    const tempArray = [...items];
    const index = tempArray.findIndex((e) => e.id == id);
    const new_input = prompt(`Edit todo no. ${index}`, tempArray[index].text);

    if (!new_input) return;

    tempArray[index].text = new_input;
    setItems(tempArray);
  }

  return (
    <div className="todo_container max-h-[calc(100dvh-100px)] overflow-y-auto">
      <h1>TODO LIST</h1>
      <hr />
      <input placeholder="add items..." className="border border-gray-400" value={addInput} onChange={(event) => {
        setAddInput(event.target.value)
      }} />

      <button className="black" onClick={addItemToDo}>ADD ITEM</button>

      <div className="content">
        {items.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.text}</p>
              <div className="*:border *:!border-gray-400 *:shadow">
                <button onClick={() => deleteTodo(e.id)}>Delete</button>
                <button onClick={() => editTodo(e.id)}>Edit</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}