"use client";

export default function HomePage() {
  function alertme() {
    alert("HELLO VIJAY");
  }

  const fullname = "Vijay Kumar";

  return (
    <div>
      <h1>COUNTER APP</h1>

      <p>Hello</p>

      <ul className="my_list">
        <li>Cow</li>
        <li>Dog</li>
        <li>Cat</li>
        <li>Rat</li>
      </ul>

      <h1>{fullname}</h1>

      <br />
      <br />
      <br />

      <button onClick={alertme}>Increase</button>
    </div>
  );
}
