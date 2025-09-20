"use client";

import { ReactNode } from "react";

export default function ComponentsKhatarnaak() {
  function some() {
    confirm("really?");
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Square
        title="SOME"
        desc="Desccirtption data"
        func={() => {
          alert("Hello");
        }}
      />
      <Square title="SOME" desc="Desccirtption data" func={some} />

      <div>
        <h1>dasd</h1>
      </div>

      <SuperDiv>
        <h1>Somet</h1>
      </SuperDiv>
      <SuperDiv>
        <p>somemore</p>
        <p>somemore</p>
        <p>somemore</p>
        <p>somemore</p>
        <p>somemore</p>
      </SuperDiv>
      <SuperDiv />
      <SuperDiv></SuperDiv>
    </div>
  );
}

function Square({
  title,
  desc,
  func,
}: {
  title: string;
  desc: string;
  func: () => void;
}) {
  return (
    <div className="bg-red-500 w-50 h-50 rounded">
      <h1>{title}</h1>
      <p>{desc}</p>
      <button onClick={func}>Click</button>
    </div>
  );
}

function SuperDiv({ children = "" }: { children?: ReactNode }) {
  return <div className="bg-green-500 w-50 h-50 rounded">{children}</div>;
}
