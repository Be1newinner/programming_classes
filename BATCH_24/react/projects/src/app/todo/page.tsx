"use client";
import { useState } from "react";

export default function Home() {
  const [todolist, setTOdolist] = useState([
    {
      id: 1,
      title: "todolist1",
      status: true,
    },
    {
      id: 2,
      title: "todolist2",
      status: true,
    },
    {
      id: 3,
      title: "todolist3",
      status: false,
    },
    {
      id: 4,
      title: "todolist4",
      status: true,
    },
  ]);
  return (
    <main className="text-black">
      <h1> TODO LIST</h1>

      <div className="header">
        <button> Add Task </button>
        {/* <div className="dropdown"></div> */}
        <select className="dropdown">
          <option value="All">All</option>
          {/* <option></option> */}
        </select>
      </div>

      <div className="container">
        {}

        <div className="box2">
          <input type="checkbox"></input> Create a react project &#129304;
          <br /> 5:22 AM, 01/06/2022
          <div className="dlticon">
            <img
              src="https://www.svgrepo.com/show/433921/bin.svg"
              height="20px"
              alt="dlticon"
            />
          </div>
          <div className="penicon">
            <img
              src="https://www.svgrepo.com/show/433895/pen.svg"
              height="20px"
              alt="penicon"
            />
          </div>
        </div>

        <div className="box2">
          <input type="checkbox"></input> Learn React &#128420; <br /> 5:22 AM,
          01/06/2022
          <div className="dlticon">
            <img
              src="https://www.svgrepo.com/show/433921/bin.svg"
              height="20px"
              alt="dlticon"
            />
          </div>
          <div className="penicon">
            <img
              src="https://www.svgrepo.com/show/433895/pen.svg"
              height="20px"
              alt="penicon"
            />
          </div>
        </div>

        <div className="box3">
          <input type="checkbox"></input> Create a ToDo App <br /> 5:21 AM,
          01/06/2022
          <div className="dlticon">
            <img
              src="https://www.svgrepo.com/show/433921/bin.svg"
              height="20px"
              alt="dlticon"
            />
          </div>
          <div className="penicon">
            <img
              src="https://www.svgrepo.com/show/433895/pen.svg"
              height="20px"
              alt="penicon"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
