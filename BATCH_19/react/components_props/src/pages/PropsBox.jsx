// import SomeBox from "./components/Box";
// import { Box, Box1 } from "./components/Box";

// import SomeBox, { Box, Box1 } from "./components/Box";

import * as BoxContainer from "../components/Box";
import { name } from "../components/Box";

function PropsBox() {
  return (
    <>
      {/* <SomeBox />
      <Box1 />
      <Box />
      <Box1 />
      <Box />
      <Box />
      <Box />
      <Box /> */}
      {/* <BoxContainer.Box /> */}
      <BoxContainer.Box1 name="some Vijay" bg="red" />
      <BoxContainer.default name="Ajay" bg="blue" />

      {name}
    </>
  );
}

export default PropsBox;
