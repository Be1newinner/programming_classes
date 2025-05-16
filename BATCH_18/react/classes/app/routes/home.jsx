import Navbar from "../components/Navbar";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1>Hello, Home Page</h1>
    </div>
  );
}
