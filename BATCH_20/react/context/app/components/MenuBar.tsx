import { Link } from "react-router";

export default function MenuBar() {
  return (
    <div className="bg-gray-800 py-2 px-4 flex justify-center gap-4 *:hover:underline underline-offset-8">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
