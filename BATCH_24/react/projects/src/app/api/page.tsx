"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function App() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((e) => {
        console.log(e);
        setApiData(e);
      });
  }

  //   Api ko call karna hai page load hone pe
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>API CALL</h1>

      <div className="space-y-4">
        {apiData.map((item, index) => (
          <div
            key={item.id}
            className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 flex items-start gap-4 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10 hover:-translate-y-1"
          >
            <div className="pt-1">
              <input
                type="checkbox"
                checked={item.completed}
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
  );
}



// Homework API
// https://dogapi.dog/api/v2/breeds