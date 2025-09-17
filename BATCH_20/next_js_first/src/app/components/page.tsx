"use client";

import { Dispatch, ReactNode, SetStateAction, useState } from "react";

export default function ComponentPage() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter title="ABC1" count={counter} setCount={setCounter} name="" />
      {/* <Counter title="ABC2" />
      <Counter title="ABC3" />
      <Counter title="ABC4" />
      <Counter title="ABC5" />
      <Counter title="ABC6" />
      <Counter title="ABC7" /> */}
      <RedDiv>
        <p>Hello</p>
      </RedDiv>
    </div>
  );
}

function Counter({
  title,
  count,
  setCount,
  name = "something",
}: {
  title: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  name?: string;
}) {
  return (
    <div>
      <h1>
        Counter: {title} {count}
      </h1>
      <p>{name}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function RedDiv({ children }: { children: ReactNode }) {
  return (
    <div className="bg-red-500 h-100 w-100">
      <h1>Title</h1>
      {children}
    </div>
  );
}
