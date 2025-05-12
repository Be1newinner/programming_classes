// Default Import
import Box3 from "./components/Box";
import { Box4, Box5 } from "./components/Box";

export default function App() {
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
