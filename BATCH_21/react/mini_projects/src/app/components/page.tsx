"use client"

import React, { useState } from 'react'

export default function ComponentPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
   
      {isOpen ? (
        <aside className="h-screen w-64 bg-slate-300 absolute top-0 left-0 p-4 shadow-md">
          <h1 className="text-2xl font-bold mb-4">SideBar</h1>
          <ul className="list-none">
            <li className="py-2 hover:bg-slate-400 cursor-pointer">Home</li>
            <li className="py-2 hover:bg-slate-400 cursor-pointer">About</li>
            <li className="py-2 hover:bg-slate-400 cursor-pointer">Contact</li>
          </ul>
        </aside>
      ) : null}

      {isDialogOpen ? (
        <div className="w-screen h-screen bg-black/25 flex justify-center items-center overflow-hidden">
          <div className="h-64 w-64 bg-slate-300 absolute p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4">Dialog</h1>
            <ul className="list-none">
              <li className="py-2 hover:bg-slate-400 cursor-pointer">Home</li>
              <li className="py-2 hover:bg-slate-400 cursor-pointer">About</li>
              <li className="py-2 hover:bg-slate-400 cursor-pointer">
                Contact
              </li>
            </ul>
            <button onClick={() => setIsDialogOpen(false)}>close</button>
          </div>
        </div>
      ) : null}
      
      <main>
        <header className="w-full h-20 bg-red-200 flex justify-end">
          <button
            className="
    bg-blue-500 
    hover:bg-blue-700 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded
    h-10
  "
            onClick={() => setIsOpen(!isOpen)}
          >
            Toggle Sidebar
          </button>
          <button
            className="
    bg-blue-500 
    hover:bg-blue-700 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded
    h-10
  "
            onClick={() => setIsDialogOpen(true)}
          >
            dialog
          </button>
        </header>
        <h1>MainPage</h1>
      </main>
    </div>
  );
}
