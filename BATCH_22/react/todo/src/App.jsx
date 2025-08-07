import { SquarePen, Trash } from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <input placeholder="enter text!" />
          <button>ADD</button>
        </div>
        <div>
          <Task id={1}/>
          <Task title={"SOME TEXT 2"} id={2} />
          <Task title={"SOME TEXT 3"} id={3} />
        </div>
      </div>
    </>
  );
}

export default App;

function Task({title="DEFAULT TITLE", id}) {
  return (
    <div className="task">
      <p>{id}. {title}</p>
      <div>
        <div className="icon_container">
          <SquarePen />
        </div>
        <div className="icon_container">
          <Trash />
        </div>
      </div>
    </div>
  );
}
