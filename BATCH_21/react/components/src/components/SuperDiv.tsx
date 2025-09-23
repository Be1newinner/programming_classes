import { ReactNode } from "react";

function SuperDiv({
  children = "",
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={["bg-green-500 w-50 h-50 rounded", className].join(" ")}
      onClick={onClick}
    >
      {children}
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

const name = "VIJAY";

export default SuperDiv;
// Named Export
// export { SuperDiv, name };
export { name, Square };
