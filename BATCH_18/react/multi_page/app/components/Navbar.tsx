import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className="p-4">
      <ul
        className={
          "flex gap-4 *:text-black *:py-2 *:px-4 *:rounded-md *:active:scale-95 *:cursor-pointer "
        }
      >
        <li className={location.pathname === "/" ? "bg-red-400" : "bg-red-100"}>
          <Link to="/">Home Page</Link>
        </li>
        <li className={location.pathname === "/about" ? "bg-red-400" : "bg-red-100"}>
          <Link to="/about">About Page</Link>
        </li>
        <li className={location.pathname === "/contact" ? "bg-red-400" : "bg-red-100"}>
          <Link to="/contact">Contact Page</Link>
        </li>
      </ul>
    </header>
  );
}
