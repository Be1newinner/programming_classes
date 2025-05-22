import { useState } from "react";

export default function Slider() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="m-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>

      <div
        className={`
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-[300px]" : "w-0"}
          bg-red-500 h-full min-h-screen overflow-hidden absolute inset-0
        `}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="mb-4 p-2 bg-white text-black rounded"
          >
            Close
          </button>
          <h1>First Item</h1>
          <h1>Second Item</h1>
          <h1>Third Item</h1>
          <h1>Forth Item</h1>
          <h1>Fifth Item</h1>
          <h1>Sixth Item</h1>
        </div>
      </div>
    </>
  );
}
