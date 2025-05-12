import "./App.css";
// import Counter from "./components/counter"
import SideEffect from "./components/SideEffect";

// import Dasdasd from "./components/Box";
// import { Box2, Box3 } from "./components/Box";

// import Dasdasd, { Box2, Box3 } from "./components/Box";
import * as Boxes from "./components/Box";

export default function UseEffect() {
  return (
    <>
      <SideEffect />
      {/* <Counter /> */}

      {/* <Dasdasd name="Vijay" color="bg-red-500" />
      <Dasdasd name="Ajay" color="bg-blue-500" />
      <Box2 name="Karan" color="bg-green-500" />
      <Box3 name="Arjun" color="bg-orange-500" /> */}

      <Boxes.Box2 name="Vijay" color="bg-red-500" />
      <Boxes.default name="Ajay" color="bg-blue-500" />
      <Boxes.Box3 name="Karan" color="bg-green-500" />
      <Boxes.default name="Arjun" color="bg-orange-500" />
    </>
  );
}
