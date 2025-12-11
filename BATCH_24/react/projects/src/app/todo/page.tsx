"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [todolist, setTodolist] = useState([
    {
      id: 1,
      title: "Create a react project 🤘",
      date: "5:22 AM, 01/06/2022",
      status: true,
    },
    {
      id: 2,
      title: "Learn React 💻",
      date: "5:22 AM, 01/06/2022",
      status: true,
    },
    {
      id: 3,
      title: "Create a ToDo App",
      date: "5:21 AM, 01/06/2022",
      status: false,
    },
  ]);


  function addtask() {
    const task = prompt("Enter your task!");
    if(!task) return;
    setTodolist([...todolist, {
      id: todolist.length + 1,
      title: task,
      date: new Date().toLocaleString(),
      status: false,
    }])
  }

  function editTask(index: number) {
    // alert("WORKING" + index);
    const task = prompt("Enter your task!", todolist[index].title);
    if(index > -1 && !!task) {
      const todoListClone = todolist.slice();
      todoListClone[index].title = task;
      setTodolist(todoListClone);
    } 
  }


  function deleteTask(index: number){
    const todoListClone = todolist.slice();
    todoListClone.splice(index, 1);
    setTodolist(todoListClone);
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <div className="max-w-xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 mb-10 tracking-tight text-center">
          TODO LIST
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            className="flex-1 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-900/40 active:scale-[0.98]"
            onClick={addtask}
          >
            Add Task
          </button>

          <div className="relative">
            <select className="appearance-none bg-zinc-900 text-zinc-300 py-3 px-6 pr-10 rounded-xl border border-zinc-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors cursor-pointer hover:bg-zinc-800">
              <option value="All">All Items</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {todolist.map((item, index) => (
            <div
              key={item.id}
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 flex items-start gap-4 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10 hover:-translate-y-1"
            >
              <div className="pt-1">
                <input
                  type="checkbox"
                  checked={item.status}
                  readOnly
                  className="w-5 h-5 rounded border-zinc-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-black bg-zinc-800 cursor-pointer"
                />
              </div>

              <div className="flex-1">
                <p
                  className={`text-lg font-medium ${
                    item.status
                      ? "text-zinc-500 line-through decoration-zinc-600"
                      : "text-zinc-200"
                  }`}
                >
                  {item.title}
                </p>
                <p className="text-xs text-zinc-600 mt-1 font-mono">
                  {item.date}
                </p>
              </div>

              <div className="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                <button
                  className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-red-400 transition-colors"
                  aria-label="Delete"
                  onClick={() => deleteTask(index)}
                >
                  <Image
                    src="https://www.svgrepo.com/show/433921/bin.svg"
                    className="w-5 h-5 invert opacity-70 hover:opacity-100"
                    alt="delete"
                    height={16}
                    width={16}
                  />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-purple-400 transition-colors"
                  aria-label="Edit"
                  onClick={() => editTask(index)}
                >
                  <Image
                    src="https://www.svgrepo.com/show/433895/pen.svg"
                    className="w-5 h-5 invert opacity-70 hover:opacity-100"
                    alt="edit"
                    height={16}
                    width={16}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
