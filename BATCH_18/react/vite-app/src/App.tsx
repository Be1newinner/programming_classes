import "./App.css"

export default function App() {

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


  return (
    <div className="todo_container">
      <h1>TODO LIST</h1>
      <hr />
      <input placeholder="add items..." />
      <button className="black">ADD ITEM</button>

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