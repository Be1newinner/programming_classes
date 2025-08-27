import { useState } from "react";

export default function ExpandingCards() {
  const [active, setActive] = useState(1);

  return (
    <div className="flex justify-center items-center h-svh p-15">
      <div className="flex gap-6 container h-[calc(100svh-80px)]  *:w-15 *:bg-cover *:transition-[flex-grow] *:duration-300">
        <div
          className={[
            "bg-[url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]",
            active === 1 ? "rounded-[40px] grow-1" : "rounded-full",
          ].join(" ")}
          onClick={() => setActive(1)}
        >
          1
        </div>
        <div
          className={[
            "bg-[url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]",
            active === 2 ? "rounded-[40px] grow-1" : "rounded-full",
          ].join(" ")}
          onClick={() => setActive(2)}
        >
          2
        </div>
        <div
          className={[
            "bg-[url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]",
            active === 3 ? "rounded-[40px] grow-1" : "rounded-full",
          ].join(" ")}
          onClick={() => setActive(3)}
        >
          3
        </div>
        <div
          className={[
            "bg-[url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]",
            active === 4 ? "rounded-[40px] grow-1" : "rounded-full",
          ].join(" ")}
          onClick={() => setActive(4)}
        >
          4
        </div>
        <div
          className={[
            "bg-[url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)]",
            active === 5 ? "rounded-[40px] grow-1" : "rounded-full",
          ].join(" ")}
          onClick={() => setActive(5)}
        >
          5
        </div>
      </div>
    </div>
  );
}
