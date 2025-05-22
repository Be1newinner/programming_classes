import { Link, useLocation } from "react-router";
import Slider from "./Slider"

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <header className="flex justify-between items-center p-2 py-4 bg-sky-200">
      <Slider />
      <h1 className="font-medium text-2xl">Asaan Hai Coding</h1>
      <nav>
        <ul className="flex gap-4">
          {menuItems.map((item) => {
            console.log(item.path, item.path === location.pathname);
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={[
                    "px-4 py-2 rounded cursor-pointer",
                    location.pathname == item.path
                      ? "bg-red-500 border-gray-500 border text-white underline underline-offset-4"
                      : "bg-red-400",
                  ].join(" ")}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
    </header>
  );
}
