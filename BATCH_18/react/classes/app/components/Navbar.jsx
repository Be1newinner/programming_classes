import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  // console.log(location.pathname);

  const pages = [
    {
      id: 1,
      title: "Home Page",
      path: "/",
    },
    {
      id: 2,
      title: "Form Page",
      path: "/form",
    },
  ];
  return (
    <header className="p-4">
      <ul
        className={
          "flex gap-4 *:text-black *:py-2 *:px-4 *:rounded-md *:active:scale-95 *:cursor-pointer "
        }
      >
        {pages.map((item) => {
          return (
            <li
              key={item.id}
              className={
                location.pathname === item.path ? "bg-red-400" : "bg-red-100"
              }
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
