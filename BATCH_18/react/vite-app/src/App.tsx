// Default Import
import { useEffect, useState } from "react";
import Box3 from "./components/Box";
import { Box4, Box5 } from "./components/Box";

export default function App() {
  const [courses, setCourses] = useState([]);

  async function getCourses() {
    try {
      const response = await fetch(
        "https://api.asaanhaicoding.in/api/v1/courses?skip=0&limit=20"
      );
      const data = await response.json();
      setCourses(data.items);
      return response;
    } catch {
      throw new Error("Unexpected API Errror!");
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  return (
    <div>
      <h1>Hello</h1>
      <Box3 name="Vijay" />
      <Box3 name="Ajay" />
      <Box4 />
      <Box5 />
    </div>
  );
}

// Compoenent
// function Box() {
//   return (
//     <div className="bg-red-500 h-28 w-28">
//       <h1>HEllo</h1>
//       <p>Bye</p>
//     </div>
//   );
// }
