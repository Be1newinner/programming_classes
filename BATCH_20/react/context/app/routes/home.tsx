import { useNavigate } from "react-router";
import type { Route } from "./+types/home";
import { useCounter } from "~/service/counter/counterContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const { c1, c2, c3 } = useCounter();

  return (
    <div>
      <h1>Hello</h1>
      <p>c1: {c1}</p>
      <p>c2: {c2}</p>
      <p>c3: {c3}</p>
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
