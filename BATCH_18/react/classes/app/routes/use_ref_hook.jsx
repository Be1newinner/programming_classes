import { useRef } from "react";

export default function UseRefHook() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          // inputRef.current.focus();
          buttonRef.current.click();
        }}
      >
        Focus
      </button>
      <button ref={buttonRef} onClick={() => alert("hello")}>
        Second Button
      </button>
    </div>
  );
}
