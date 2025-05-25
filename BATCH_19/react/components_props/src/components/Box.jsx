// export function Box() {
//   return (
//     <div
//       style={{
//         background: "red",
//         width: 100,
//         height: 100,
//       }}
//     >
//       Vijay
//     </div>
//   );
// }

// export default function Box2() {
//   return (
//     <div
//       style={{
//         background: "red",
//         width: 100,
//         height: 100,
//       }}
//     >
//       Vijay
//     </div>
//   );
// }

function Box1({ name, bg }) {
  //   const name = "Vijay";
  return (
    <div
      style={{
        background: bg,
        width: 100,
        height: 100,
      }}
    >
      {name}
    </div>
  );
}

export const name = "dasda";

export { Box1 };

export default Box1;
