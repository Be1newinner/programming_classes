"use client";

import SuperDiv, { name, Square } from "@/components/SuperDiv";
import SuperDiv2 from "@/components/SuperDiv2";
// import { name } from "@/components/SuperDiv";

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
      <SuperDiv
        className="underline bg-blue-500"
        onClick={() => alert("dsafs")}
      >
        <h1>HO</h1>
      </SuperDiv>
      <SuperDiv2 className="text-lg underline" onClick={() => alert("hi")}>
        <div>dsa</div>
      </SuperDiv2>
    </div>
  );
}
