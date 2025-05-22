import { Link, Links } from "react-router";
import type { Route } from "./+types/home";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Some title" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />

      <h1>Hello</h1>
    </div>
  );
}
