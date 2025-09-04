import { Link } from "react-router";

export default function MenuBar({ pageNo }) {
  console.log(pageNo);
  return (
    <ul className="flex gap-4 bg-amber-700 py-2 px-8 rounded-xl">
      <li>
        <Link
          to="/"
          className={[
            "hover:underline underline-offset-4",
            pageNo == 1 ? "text-black" : "",
          ].join(" ")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={[
            "hover:underline underline-offset-4",
            pageNo == 2 ? "text-black" : "",
          ].join(" ")}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={[
            "hover:underline underline-offset-4",
            pageNo == 3 ? "text-black" : "",
          ].join(" ")}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
