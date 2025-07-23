import { Link, useLocation } from "react-router";
import { menuLocations } from "../routes";

export default function Navbar() {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <header className="p-4">
      <ul
        className={
          "flex gap-4 *:text-black *:py-2 *:px-4 *:rounded-md *:active:scale-95 *:cursor-pointer "
        }
      >
        {menuLocations.map((item) => {
          return (
            <li
              key={item.id}
              className={
                location.pathname === item.path ? "bg-red-400" : "bg-red-100"
              }
            >
              <Link to={item.slug}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
