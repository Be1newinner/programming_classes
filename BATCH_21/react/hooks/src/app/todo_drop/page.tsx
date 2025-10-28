"use client";

import { Plus } from "lucide-react";
import React, { useState, useRef } from "react";

export default function TodoDropPage() {
    const [todo, setTodo] = useState("");
    const [todoData, setTodoData] = useState([
        { createdAt: "1", title: "Eat Burger!", status: "COMPLETED" },
        { createdAt: "2", title: "Drink Sprite!", status: "PENDING" },
        { createdAt: "3", title: "Eat Tripple Egg Roll!", status: "PENDING" },
    ]);

    // Track the index of the dragged item
    const dragItemIndex = useRef<number | null>(null);

    function addTodo() {
        const date = new Date();
        if (!todo.trim()) return; // Avoid adding empty todos
        setTodoData([
            ...todoData,
            {
                createdAt: date.toISOString(),
                title: todo,
                status: "PENDING",
            },
        ]);
        setTodo("");
    }

    function onDragStart(e: React.DragEvent<HTMLLIElement>, index: number) {
        dragItemIndex.current = index;
        e.dataTransfer.effectAllowed = "move";
    }

    function onDragOver(e: React.DragEvent<HTMLLIElement>) {
        e.preventDefault(); // Necessary to allow dropping
        e.dataTransfer.dropEffect = "move";
    }

    function onDrop(e: React.DragEvent<HTMLLIElement>, dropIndex: number) {
        e.preventDefault();
        const dragIndex = dragItemIndex.current;
        if (dragIndex === null || dragIndex === dropIndex) return;

        const newTodoData = [...todoData];
        // Remove dragged item
        const draggedItem = newTodoData.splice(dragIndex, 1)[0];
        // Insert dragged item at the drop position
        newTodoData.splice(dropIndex, 0, draggedItem);

        setTodoData(newTodoData);
        dragItemIndex.current = null;
    }

    return (
        <main className="flex flex-col w-full bg-[#49243E] h-screen justify-center items-center text-[#DBAFA0]">
            <h1 className="font-bold text-3xl">TODO</h1>
            <div className="bg-[#704264] shadow p-4 rounded">
                <div className="flex gap-4 *:text-sm *:rounded-sm">
                    <input
                        placeholder="type todo!"
                        name="todo"
                        className="outline outline-[#DBAFA0] px-2 py-1"
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}
                    />
                    <button
                        className="outline outline-[#DBAFA0] px-2 py-1 cursor-pointer active:scale-95 flex items-center justify-center"
                        onClick={addTodo}
                    >
                        <Plus size={14} className="text-[#DBAFA0]" />
                        <span className="text-[#DBAFA0]">add</span>
                    </button>
                </div>
                {/* Todo List */}
                <ol className="py-4 pl-4">
                    {todoData.map((item, index) => (
                        <li
                            key={item.createdAt}
                            className="border-b py-2 list-decimal cursor-grab"
                            draggable="true"
                            onDragStart={(e) => onDragStart(e, index)}
                            onDragOver={onDragOver}
                            onDrop={(e) => onDrop(e, index)}
                        >
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </main>
    );
}
