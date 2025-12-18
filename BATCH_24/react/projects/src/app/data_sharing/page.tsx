"use client";
import React, { useState } from "react";

// condition 1. Parent se Child component me data bhejna hai!
// export default function DataSharingPage() {
//     const [name, setName] = useState("Vijay Kumar")
//     const [name1, setName1] = useState("Vijay Kumar 2")

//     return (
//       <div>
//         <h1>Data Sharing Componenets</h1>

//         <Child1 data={name} />
//         <Child1 data={name1} />
//       </div>
//     );
// }

function Child1({ data }) {
  return (
    <div>
      <p>Child 1 Data: {data}</p>
    </div>
  );
}

function ChildSender({ name, setName }) {
  return (
    <div>
      <label>
        Child2 : {" "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </div>
  );
}

// // Condition 2. Pass Data from one child to another child
export default function DataSharingPage() {
  const [name, setName] = useState("Vijay Kumar");

  return (
    <div>
      <h1>Data Sharing b/w two children Componenets</h1>

      <Child1 data={name} />
      <ChildSender name={name} setName={setName} />
    </div>
  );
}
