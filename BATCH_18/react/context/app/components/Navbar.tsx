import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-4 bg-slate-800 px-2 py-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/second"}>Second</NavLink>
        </li>
        <li>
          <NavLink to={"/third"}>Third</NavLink>
        </li>
      </ul>
    </div>
  );
}
