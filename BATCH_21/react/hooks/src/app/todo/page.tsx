"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";
// CRUD operations with Array of Objects and useState 
export default function TodoPage() {

    const [todo, setTodo] = useState("");

    /*
     Notes: 
     1. Jab bhi hum input banaenge tab humesha ek use state bhi banenge aur use link krenge input k sath me!
    */

    const [todoData, setTodoData] = useState([
        {
            createdAt: "1",
            title: "Eat Burger!",
            status: "COMPLETED",
        },
        {
            createdAt: "2",
            title: "Drink Sprite!",
            status: "PENDING",
        },
        {
            createdAt: "3",
            title: "Eat Tripple Egg Roll!",
            status: "PENDING",
        },
    ])


    function addTodo() {
        const date = new Date();
        setTodoData([...todoData, {
            // id: todoData.length + 1,
            createdAt: date.toISOString(),
            title: todo,
            status: "PENDING",
        }])
        console.log(todoData);
        setTodo("")
    }


    return (
        //    React Fragment
        <main className="flex flex-col w-full bg-[#49243E] h-screen justify-center items-center text-[#DBAFA0]">
            <h1 className="font-bold text-3xl">
                TODO
            </h1>
            <div className="bg-[#704264] shadow p-4 rounded">
                <div className="flex gap-4 *:text-sm *:rounded-sm">

                    <input
                        placeholder="type todo!"
                        // this is optional
                        name="todo"
                        className="outline outline-[#DBAFA0] px-2 py-1"
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                    />

                    <button className="outline outline-[#DBAFA0] px-2 py-1  cursor-pointer active:scale-95 flex items-center justify-center" onClick={addTodo}>
                        <Plus size={14} className="text-[#DBAFA0]" /> <span className="text-[#DBAFA0]">add</span>
                    </button>
                </div>
                {/* Todo List */}
                <ol className="py-4 pl-4">
                    {todoData.map((item) => {
                        return (
                            <li key={item.createdAt} className="border-b py-2 list-decimal" draggable="true">
                                <span>{item.title}</span>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </main>
    )
}