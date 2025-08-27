import { useCounter } from "~/service/counter/counterContext";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  const { increase, decrease, reset } = useCounter();

  return (
    <div>
      <h1>About Page</h1>
      <div>
        <button
          onClick={() => {
            increase("c1");
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            decrease("c1");
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
