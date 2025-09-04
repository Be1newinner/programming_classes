import { Link } from "react-router";
import type { Route } from "./+types/home";
import MenuBar from "../components/MenuBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <MenuBar pageNo={1}/>

      <p>Hello Main page</p>
    </div>
  );
}
