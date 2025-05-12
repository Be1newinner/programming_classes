// Compoenent

// Default export
export default function Box3({ name }) {
  return (
    <div className="bg-red-500 h-28 w-28">
      <h1>HEllo, {name}</h1>
      <p>Bye</p>
    </div>
  );
}

export function Box4() {
  return (
    <div className="bg-green-500 h-28 w-28">
      <h1>HEllo</h1>
      <p>Bye</p>
    </div>
  );
}

export function Box5() {
  return (
    <div className="bg-orange-500 h-28 w-28">
      <h1>HEllo</h1>
      <p>Bye</p>
    </div>
  );
}
