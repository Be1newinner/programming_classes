import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="p-4">
      <ul className="flex gap-4 *:bg-red-100 *:text-black *:py-2 *:px-4 *:rounded-md *:active:scale-95 *:cursor-pointer">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
      </ul>
    </header>
  );
}
