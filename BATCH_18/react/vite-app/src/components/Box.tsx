// Default Export
export default function Box({ name, color }) {
  return (
    <div className={"w-48 h-48 " + color}>
      <h1>Hello, {name}</h1>
      <p>SOme details</p>
    </div>
  );
}

// Named Export
export function Box2({ name, color }) {
  return (
    <div className={"w-48 h-48 " + color}>
      <h1>Hello, {name}</h1>
    </div>
  );
}

// Named Export
export function Box3({ name, color }) {
  return (
    <div className={"w-48 h-48 " + color}>
      <h1>Hello, {name}</h1>
    </div>
  );
}
