import { useNavigate } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello</h1>

      <button
        onClick={() => {
          navigate("about", {
            replace: true,
          });
        }}
      >
        ABOUT PAGE
      </button>
    </div>
  );
}
